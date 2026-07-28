/* name=js/leaderboard.js
   Leaderboard local + export/import + stub de sync remoto.
   Usa localStorage key: chemicalRoyale.leaderboard.v1
*/

(function(){
  const STORAGE_KEY = "chemicalRoyale.leaderboard.v1";
  const REMOTE_URL_KEY = "chemicalRoyale.leaderboard.remoteUrl";

  function readAll(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ console.error("leaderboard: read error", e); return []; }
  }
  function writeAll(list){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }catch(e){
      console.error("leaderboard: write error", e);
      alert("Falha ao salvar localmente (quota/localStorage): experimente exportar antes de salvar.");
    }
  }

  function sanitizeEntry(entry){
    return {
      name: String(entry.name || "Anônimo").trim(),
      school: String(entry.school || "").trim(),
      email: String(entry.email || "").trim(),
      pontos: Number(entry.pontos || 0),
      peq: Number(entry.peq || 0),
      acertos: Number(entry.acertos || 0),
      erros: Number(entry.erros || 0),
      avatarId: entry.avatarId || null,
      ts: entry.ts || new Date().toISOString()
    };
  }

  function saveEntry(entry){
    const list = readAll();
    list.push(sanitizeEntry(entry));
    // ordenar decrescente por pontos, depois por PEQ
    list.sort((a,b) => (b.pontos - a.pontos) || (b.peq - a.peq));
    // manter top N (por exemplo 200)
    const top = list.slice(0, 200);
    writeAll(top);
    renderLeaderboard();
    return top;
  }

  function clearLeaderboard(){
    localStorage.removeItem(STORAGE_KEY);
    renderLeaderboard();
  }

  function exportJSON(){
    const data = readAll();
    const blob = new Blob([JSON.stringify({ exportedAt:new Date().toISOString(), data }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "chemical_royale_leaderboard.json"; a.click();
    URL.revokeObjectURL(url);
  }

  function exportCSV(){
    const data = readAll();
    const cols = ["ts","name","school","email","pontos","peq","acertos","erros","avatarId"];
    const rows = [cols.join(",")].concat(data.map(r => cols.map(c => {
      const v = r[c] === undefined || r[c] === null ? "" : String(r[c]).replace(/"/g,'""');
      return `"${v}"`;
    }).join(",")));
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "chemical_royale_leaderboard.csv"; a.click();
    URL.revokeObjectURL(url);
  }

  function importJSONFile(file){
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const parsed = JSON.parse(reader.result);
        const data = Array.isArray(parsed.data) ? parsed.data : (Array.isArray(parsed) ? parsed : []);
        const merged = (readAll().concat(data)).map(sanitizeEntry);
        merged.sort((a,b) => (b.pontos - a.pontos) || (b.peq - a.peq));
        writeAll(merged.slice(0,500));
        renderLeaderboard();
        alert("Importação concluída.");
      }catch(e){
        console.error(e);
        alert("Arquivo JSON inválido.");
      }
    };
    reader.readAsText(file);
  }

  function renderLeaderboard(){
    const list = readAll();
    const el = document.getElementById("leaderboard-list");
    if(!el) return;
    el.innerHTML = "";
    if(list.length === 0){
      el.innerHTML = "<p style='padding:18px;color:var(--muted)'>Nenhum registro ainda — seja o primeiro!</p>";
      return;
    }
    list.forEach((row, idx) => {
      const li = document.createElement("li");
      li.className = "leaderboard-item";
      li.innerHTML = `
        <div class="leaderboard-rank">${idx+1}</div>
        <div class="leaderboard-meta">
          <div class="leaderboard-name">${escapeHtml(row.name)} <span style="font-weight:500;color:var(--muted); font-size:0.9rem">— ${escapeHtml(row.school || "")}</span></div>
          <div class="leaderboard-sub">Pontos: <span class="leaderboard-score">${row.pontos}</span> · PEQ: ${row.peq} · Acertos: ${row.acertos} · Erros: ${row.erros}</div>
        </div>
      `;
      el.appendChild(li);
    });
  }

  function escapeHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  /* Remote sync stub: envia POST para uma URL (Apps Script / API)
     Payload exemplo:
     {
       source: "chemical-royale",
       name, email, school, pontos, peq, acertos, erros, avatarId, ts
     }
  */
  async function syncRemote(entry){
    const url = localStorage.getItem(REMOTE_URL_KEY);
    if(!url){
      alert("Nenhuma URL remota configurada. Configure a URL do Web App (Apps Script) na chave de configuração remota.");
      return;
    }
    try{
      const payload = { source: "chemical-royale", entry: sanitizeEntry(entry) };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(payload)
      });
      if(!res.ok) throw new Error("Resposta não OK: " + res.status);
      alert("Sincronização remota enviada com sucesso.");
    }catch(e){
      console.error("syncRemote error", e);
      alert("Falha ao enviar ao servidor: veja console. (Se for Apps Script, verifique CORS / permissões.)");
    }
  }

  /* --- wiring com DOM --- */
  document.addEventListener("DOMContentLoaded", () => {
    renderLeaderboard();
    const form = document.getElementById("lb-save-form");
    const inputName = document.getElementById("lb-name");
    const inputSchool = document.getElementById("lb-school");
    const inputEmail = document.getElementById("lb-email");

    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      // preenche com CRState se disponível
      const state = (typeof CRState !== "undefined") ? CRState.getAll() : {};
      const entry = {
        name: inputName.value || state.student?.nome || "Anônimo",
        school: inputSchool.value || state.student?.escola || "",
        email: inputEmail.value || state.student?.email || "",
        pontos: state.score?.pontos || 0,
        peq: state.peq || 0,
        acertos: state.score?.acertos || 0,
        erros: state.score?.erros || 0,
        avatarId: state.avatarId || state.avatar || null,
        ts: new Date().toISOString()
      };
      saveEntry(entry);
      // opcional: tentar envio remoto em background (não obrigatório)
      // syncRemote(entry);
      form.reset();
      alert("Salvo localmente no ranking.");
    });

    document.getElementById("btn-export-json").addEventListener("click", exportJSON);
    document.getElementById("btn-export-csv").addEventListener("click", exportCSV);
    const fileImport = document.getElementById("file-import");
    document.getElementById("btn-import").addEventListener("click", ()=> fileImport.click());
    fileImport.addEventListener("change", (ev)=> {
      const f = ev.target.files && ev.target.files[0];
      if(f) importJSONFile(f);
      fileImport.value = "";
    });

    document.getElementById("btn-clear").addEventListener("click", ()=> {
      if(confirm("Tem certeza que deseja limpar o ranking local? Esta operação não pode ser revertida.")) clearLeaderboard();
    });

    document.getElementById("btn-sync-remote").addEventListener("click", async ()=> {
      // Abre prompt para inserir URL do Web App (Apps Script)
      const url = prompt("Cole a URL do Web App (Apps Script) que receberá o ranking (campo público):", localStorage.getItem(REMOTE_URL_KEY) || "");
      if(url){
        localStorage.setItem(REMOTE_URL_KEY, url);
        alert("URL salva localmente. Use 'Salvar no ranking' para postar entradas individuais automaticamente.");
      }
    });

    // preencher payload-example no HTML
    const payloadExampleEl = document.getElementById("payload-example");
    if(payloadExampleEl){
      const example = {
        source: "chemical-royale",
        entry: {
          name: "João Silva",
          email: "joao@escola.edu.br",
          school: "Escola Exemplo",
          pontos: 420,
          peq: 12,
          acertos: 14,
          erros: 2,
          avatarId: "marie-curie",
          ts: new Date().toISOString()
        }
      };
      payloadExampleEl.textContent = JSON.stringify(example, null, 2);
    }
  });

  // expose functions for debug
  window.CRLLeaderboard = { readAll, saveEntry, clearLeaderboard, exportJSON, exportCSV, importJSONFile, syncRemote };
})();
