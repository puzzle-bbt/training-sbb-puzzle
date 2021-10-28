---
title: "GitHub"
linkTitle: "GitHub"
weight: 4
---

GitHub ist eine Webseite für das Verwalten von remote Git Repositories. Neben den Features von Git hat Github noch weitere Features wie Zugriffskontrolle und verschiedene Funktionen für die Zusammenarbeit, wie z. B. Wikis und grundlegende task management tools für jedes Projekt.

## GitHub Alternativen

Natürlich ist GitHub nicht die einzige Platform welche diesen Service anbietet. Alle Alternativen haben ihre eigenen Features und Limitierungen. Im Kern verwenden aber alle Git.

Alternativen:
* Gitea: https://gitea.io
* Gitolite: https://gitolite.com
* Gitosis: https://github.com/tv42/gitosis
* GitLab: https://gitlab.com/
* Bitbucket: https://bitbucket.org

## GitHub Account

Falls du noch keinen GitHub-Account hast wäre jetzt der Moment einen zu erstellen. https://github.com/signup

## Git Protokolle

Um auf ein entferntes Git Repository zuzugreifen, gibt es in der Regel zwei Varianten:

* HTTPS
* SSH

Beide Protokolle bieten standardmässig Verschlüsselung, Authentifizierung und Komprimierung.

### Git über HTTPS

Kurze Wiederholung: Um ein Repository über HTTPS zu klonen verwendet man

```bash
$ git clone https://github.com/kelseyhightower/nocode.git
```

Dies ist die einfachste Variante um Code schnell herunterzuladen und lokal im eigenen Editor zu betrachten.

Vorteile:

* Anonymer Zugriff möglich
* Zugriff für Systeme, auf denen SSH weniger verbreitet ist
* HTTPS ist auf vielen Corporate Firewalls standardmässig offen...

Nachteile:

* Zwischenspeicherung der Anmeldedaten weniger benutzerfreundlich als mit SSH Keys
* Konfiguration des Webservers etwas komplizierter als die von SSH

### Git über SSH

Um ein Repository mit SSH zu klonen, kommt folgender Befehl zum Einsatz:

```bash
$ git clone git@github.com:cajotafer/10xengineers.git
```

Für die meisten Anwendungsfälle ist dies der bevorzugte Weg um entfernte Git Repositories zu verwenden.

Vorteile:

* SSH ist auf jedem Linux System bereits vorinstalliert (server- wie clientseitig)
* SSH Server sind sehr einfach zu konfigurieren
* Der Zugriff via SSH ist sehr sicher

Nachteile:

* Bietet keinen anonymen Zugriff

## GitHub Features

| Feature | Funktion |
| --- | --- |
| Issues | Ermöglichen es Tasks in einem Repo zu erstellen und zu tracken.  |
| Pull Requests | Ein Pull Request ermöglicht es Changes zu Reviewen und zu besprechen bevor sie in einen Branch gemerged werden. |
| Forks | Eine Fork ist eine Kopie von einem Git-Repo. Die Fork kann dann bearbeitet und angepasst werden ohne, dass das originale Repo davon betroffen ist. |
| GitHub Pages | Basic Webseiten welch auf GitHub gehostet werden |
| GitHub Actions | CI/CD Integration von GitHub |


## Hands On

Für dieses Hands-On werden wir alles via Webinterface von GitHub machen. Ein Grossteil der Tasks können jedoch auch Lokal mit git im Terminal gemacht werden.

### Branches und PR's
1. https://guides.github.com/activities/hello-world/

### Forks, PR's, Reviews
1. Fork erstellen von: https://github.com/SylivanKenobi/hello-world
![Artifactory](../github/create-fork.png "Artifactory")
1. Branch auf Forke erstellen
1. `hello-world.sh` auf beiden Branches bearbeiten




    Fork erstellen von https://github.com/SylivanKenobi/hello-world
    Create Branch, change hello world, create MR, review, merge
    change hello world on branch commit and push, change hello world on master commit and push, rebase branch with master, fix merge issue, force push, create MR, review, merge
    Rebase with Fork, create PR with fix issue



<!-- ## Hooks

Hooks sind eine praktische Möglichkeit, bei gewissen Aktionen in Git Scripts auszuführen die das Leben ungemein erleichtern. Der Einsatz von Hooks macht tendenziell nur mit entfernten Repositories Sinn. Soll zum Beispiel vor einem Commit die Syntax des Codes überprüft werden, ist dies mit einem lokalen Pre-Commit Hook möglich. In lokal ausgecheckten Repositories finden sich im Verzeichnis `.git/hooks/` Beispiele für alle möglichen Anwendungsfälle.
Ebenfalls besteht die Möglichkeit, Hooks auf Serverseite zu konfigurieren. Mehr Infos zu Hooks [gibt es hier](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) -->

