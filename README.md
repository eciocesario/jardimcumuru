# Pousada Jardim Cumuru — site

Site institucional (página única, PT + EN) da **Pousada Jardim Cumuru**, em Cumuruxatiba,
Prado – Bahia. Apresenta a pousada com tom boutique e converte o visitante para o
**WhatsApp**. Sem preços e sem sistema de reservas — só a "vibe" e o contato.

🔗 **No ar:** https://jardimcumuru.com.br · 📷 [@jardimcumuru](https://www.instagram.com/jardimcumuru)

## Tecnologia
Site **estático**: HTML + CSS + JavaScript puro, sem framework e sem build. Funciona sem
JavaScript (o JS é só melhoria progressiva). Hospedado na **Netlify**.

## Estrutura
```
index.html        Página em português
en/index.html     Página em inglês
styles.css        Estilos (paleta e fontes da marca)
script.js         Menu e animações (opcional)
assets/           Logos, favicon, imagem social e fotos (photos/)
404.html          Página de erro
sitemap.xml · robots.txt · netlify.toml   SEO e configuração de deploy
```

## Como atualizar
- **Pelo GitHub:** edite/suba os arquivos alterados e faça *commit*. A Netlify publica
  sozinha a cada commit.
- **Deploy manual (mais simples):** na Netlify → aba **Deploys** → arraste o zip do site;
  ela descompacta e publica.

## Identidade da marca
- Cores: verde `#37543A`, terracota `#DD7033`, caramelo `#B07E54`, off-white `#FAF7EF`.
- Fontes: **Yeseva One** (títulos) e **Poppins** (texto).
- Logo oficial em `assets/` (versões verde, creme e selo).

## Pendências / próximos passos
- Aplicar textos finais e trocar pelas fotos em alta do cliente.
- Conectar o feed automático do **Instagram** (widget na seção Galeria).
- Cadastrar no **Google Perfil da Empresa** e **Search Console** (ver checklist do projeto).
