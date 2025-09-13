export const decodeHtml = (html: string) => {
  html = html.replace(/&quot;/g, '"')
  html = html.replace(/&#039;/g, "'")
  html = html.replace(/&amp;/g, '&')
  html = html.replace(/&lt;/g, '<')
  html = html.replace(/&gt;/g, '>')
  return html
}
