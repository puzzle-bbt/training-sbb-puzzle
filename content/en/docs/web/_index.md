---
title: "Angular Setup"
type: docs
weight: 1
sectionnumber: 1
date: 2021-10-20
description: >
---

In diesem Lab wirst du Angular installieren. 

Das Lab orientiert sich stark an der offiziellen Dokumentation von Angular. 
Die Dokumentation findest du  unter <a href="https://angular.io/docs" target="_blank">angular.io/docs</a>.

### Aufgabe 1 - Installation von Node.js

In diesem ersten Schritt wirst du Node.js installieren, falls Node.js noch nicht bei dir installiert ist.

Überprüfe zuerst, ob Node.js bereits auf deinem System installiert ist:

```
node -v
```

Falls Node.js noch nicht auf deinem System installiert ist, kannst du Node.js über nvm (Node Version Manager) installieren.

Verwende das Skript```install.sh```innerhalb des repository <a href="https://github.com/nvm-sh/nvm" target="_blank">github.com/nvm-sh/nvm</a>, um nvm zu installieren:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Verwende den Befehl
```
nvm -v
```
, um zu überprüfen, ob nvm richtig installiert wurde.

Um eine spezifische Version```<x.y.z>```von Node.js zu installieren (Beispiel `12.22.7`), verwende den Befehl
```
nvm install <version>
```

Angular benötigt eine Active LTS (long-term support) oder eine Maintenance LTS Version von Node.js. Die aktuellen Active LTS und Maintenance LTS Versionen von Node.js sind nachfolgend abgebildet (Stand Oktober 2021),
und unter <a href="https://nodejs.org/en/about/releases/" target="_blank">nodejs.org/en/about/releases</a> aufgelistet.

<br />

![Active LTS und Maintenance LTS Versionen von Node js](angular_setup/node_js_schedule.svg)

<!-- maybe use HUGO syntax instead of HTML / MD -->

Falls bereits eine Version von Node.js auf deinem System installiert war, und du nvm nachträglich installiert hast,
kannst du mit dem Befehl
```
nvm use system
```
die bereits installierte Version zur Verwendung auswählen.

Für die Installation von Angular brauchst du den package mangager npm von Node.js. 
Stelle sicher, dass npm ebenfalls auf deinem System installiert ist:

```
npm -v
```

### Aufgabe 2 - Installation des CLI von Angular

In diesem Schritt wirst du das CLI (command line interface) von Angular über npm installieren.

Verwende dazu den folgenden Befehl:
```
npm install -g @angular/cli
```

Mit der Flag ```-g``` wird das CLI von Angular global installiert. 

Das heisst unter anderem, dass executables in einem Verzeichnis installiert werden,
das in der Umgebungsvariablen```PATH```aufgelistet ist.
Mehr Informationen dazu findest du <a href="https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/" target="_blank">hier</a>.

Zur Überprüfung, ob Angular richtig installiert wurde, verwende:
```
ng version
```

### Aufgabe 3 - Erstellen einer App mit dem CLI

Das Grundgerüst einer Angular-App erstellt man mit dem Befehl ```ng new```. 

Verwende den Befehl
```
ng new my-app
```

, um eine neue App mit der Bezeichnung ```my-app``` zu erstellen.
Bei den zwei anschliessenden Eingabeaufforderungen / Prompts kann man mit Enter die Standardoption bestätigen. Das CLI erstellt anschliessend ein Verzeichnis mit dem Namen ```my-app``` und den generierten Dateien.


### Aufgabe 4 - Ausführen einer App mit dem CLI

Das CLI von Angular einthält einen Server, der eine App lokal bereitstellen kann.

Verwende innerhalb des mit dem CLI erstellten Verzeichnisses den Befehl
```
ng serve
```
, um die in der letzten Aufgabe erstellte App zu builden und zu starten.

Mit der zusätzlichen Option```--open```öffnet das CLI die App direkt in einem Browser. Per default wird die App unter der Webadresse <a href="localhost:4200" target="_blank">localhost:4200</a> bereitgestellt.

Falls alles erfolgreich war, wird eine von Angular generierte Standardseite angezeigt. Diese Seite ist nachfolgend kurz abgebildet.

<br />

![Die von Angular generierte Standardseite.](angular_setup/ng_default_app.png)






























