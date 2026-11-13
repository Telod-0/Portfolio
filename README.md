# Portfolio — Alessio Provenza

Sito portfolio statico con una selezione di progetti di product e UX/UI design.
Ogni progetto ha una pagina dedicata con contesto, processo e risultato.

## Tecnologie

- **HTML5** semantico, senza framework lato client
- **SCSS** compilato in CSS (file unico `scss/style.scss`)
- **JavaScript** vanilla per il form contatti
- **Bootstrap 5.3** via CDN (usato solo per il `container-fluid` della home)
- **Google Fonts**: Oswald, Hanken Grotesk, JetBrains Mono
- **EmailJS** per l'invio del form contatti

## Struttura del progetto

```
.
├── index.html            # Home: hero, progetti, profilo, contatti
├── convograph.html       # Pagine progetto
├── northwind.html
├── mosaic.html
├── storyframe.html
├── fieldnotes.html
├── daymark.html
├── menu-*.html           # Stub usati dalla navigazione della home
├── css/
│   └── style.css         # CSS compilato
├── scss/
│   └── style.scss        # Sorgente SCSS (token, layout, componenti)
├── js/
│   └── contact-form.js   # Invio form tramite EmailJS
└── assets/
    └── icons/            # SVG, pattern e favicon
```

## Sviluppo locale

Il sito è completamente statico: basta aprire `index.html` nel browser.

Per servirlo con un server locale:

```bash
npx serve .
# oppure
python -m http.server
```

### Modificare gli stili

Il CSS è generato da `scss/style.scss`. Dopo ogni modifica va ricompilato:

```bash
npx sass scss/style.scss css/style.css --no-source-map
```

In alternativa, con VS Code e l'estensione **Live Sass Compiler** la compilazione
avviene al salvataggio (output `expanded` in `css/`, come da `.vscode/settings.json`).

## Deploy

Il sito è pubblicato con **GitHub Pages** dal branch `main` (cartella root).
Per aggiornare il sito online basta fare push su `main`: la pubblicazione parte
automaticamente.

## Contatti

Per collaborazioni o domande usa il form contatti in fondo alla home.

---

© Alessio Provenza. Tutti i diritti riservati.
