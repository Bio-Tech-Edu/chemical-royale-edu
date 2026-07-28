/**
 * Code.gs — Google Apps Script handler para receber registros do Leaderboard
 * Projetado para ser publicado como "Web App" a partir da conta
 * pamella.balcacar@edu.mt.gov.br e anexado a uma Google Sheet.
 *
 * Instruções rápidas:
 * 1) Em https://script.google.com crie um novo projeto e cole este arquivo.
 * 2) Vincule ao Google Sheet desejado (Arquivo > Vincular a planilha) ou
 *    abra o script a partir da própria planilha em Extensões > Apps Script.
 * 3) Ajuste a política de acesso: Deploy > New deployment > Web app
 *      - Execute as: Me (pamella.balcacar@...)
 *      - Who has access: Anyone (ou Only myself / Domain, conforme política interna)
 * 4) Após deploy, copie a URL do Web App e cole na UI do leaderboard (botão "Enviar ao servidor").
 *
 * Segurança recomendada (opcional): adicionar um parâmetro secreto (token)
 * no endpoint e validar aqui (ver validaToken abaixo) para evitar spam.
 */

function doPost(e) {
  try {
    // parse JSON body
    const payload = JSON.parse(e.postData.contents);
    const source = payload.source || "chemical-royale";
    const ent = payload.entry || payload;

    // opcional: valida token para evitar requisições não autorizadas
    // descomente/ajuste se quiser usar um token: validateToken(e, 'SEU_TOKEN_AQUI');

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheetName = 'leaderboard';
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(["ts","source","name","email","school","pontos","peq","acertos","erros","avatarId"]);
    }

    const row = [
      ent.ts || new Date().toISOString(),
      source,
      ent.name || '',
      ent.email || '',
      ent.school || '',
      Number(ent.pontos) || 0,
      Number(ent.peq) || 0,
      Number(ent.acertos) || 0,
      Number(ent.erros) || 0,
      ent.avatarId || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Exemplo simples de validação por token (opcional)
 * - enviar o token junto na URL: https://script.google.com/.../exec?token=SEU_TOKEN
 * - ou na propriedade payload.token
 */
function validateToken(e, expectedToken) {
  const params = e.parameter || {};
  const tokenFromQuery = params.token;
  if (tokenFromQuery === expectedToken) return true;
  // também verificar no corpo JSON (se enviado)
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    if (body && body.token === expectedToken) return true;
  } catch (e) {
    // ignore
  }
  throw new Error('Token inválido');
}
