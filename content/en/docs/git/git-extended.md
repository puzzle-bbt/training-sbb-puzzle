---
title: "Git Erweitert"
linkTitle: "Git Erweitert"
weight: 2
---

Nachdem du die Basics von git gelernt hast, ist es Zeit dich weiter zu vertiefen.

## Inhalt

* [Stash](#Stash)
* [Cherry Pick](#CherryPick)
* [Tag](#Tag)
* [Alias](#Alias)

## Stash
## Squash

## Merge/Pullrequests

## Cherry Pick
### Was ist Cherry-Pick ?
git cherry-pick ist ein Befehl welcher es ermöglicht beliebige Git-Commits per Referenz
anzusprechen und diese an den momentanen Arbeitskopf (HEAD) anzuheften.
git cherry-pick kann sehr nützlich für das rückgängig Machen von Änderungen sein. 

Zum Beispiel: Ein Commit ist aus Versehen im falschen Branch. Nun kannst du zum korrekten
Branch wechselt und brauchst git cherry-pick um den Commit am richtigen Ort zu befestigen.

### Wie funktioniert Cherry-Pick ?
Um Cherry Pick anzuwenden gibt man folgenden Befehl ein:
```
git cherry-pick <commit-hash>
```
Der <commit-hash> muss natürlich noch mit dem korrekten Hash des Commits ersetzt werden, welchen 
man verschieben will. Anschliessend wird der Commit an den Branch angeheftet, auf dem man sich gerade 
befindet. Darum Achtung!: Immer zuerst kontrollieren ob man derzeit auch wirklich auf dem korrekten
Branch ist. 

## Tag
### Was sind Tags ?
Tags sind Referenzen, welche an einen bestimmten Punkt der History
zeigen. Tagging wird üblicherweise benutzt um wichtige Ereignisse wie z.B.
das Release einer Applikation festzuhalten. Ein Tag ist etwas ähnliches
wie ein Branch, nur das ein Tag sich nicht verändert. Anders als ein Branch,
kann ein Tag nach dem Erstellen keine weiteren Commits
beinhalten.

### Wie funktionieren Tags ?
Um ein Tag zu erstellen wird folgender Befehl benötigt: 
```
git tag <tagname>
 ```
Wobei der <tagname> auch wieder durch den gewünschten String ersetzt werden muss. 
Will man zusätzlich zum Tag eine Beschriftung hinzufügen, macht man das mit:
```
git tag <tagname> -a
 ```
Damit wird ein annotated tag erstellt.

Auch wichtig anzumerken: Wenn du normal auf den Branch pushst, werden die Tags
nicht standardmässig mitgepusht. Dazu brauchst du dann:
```
git push origin --tags
 ```
Willst du nur ein einzelnes Tag pushen, brauche: 
```
git push origin <tag>
 ```

## Alias
### Was sind Aliasse ?
Ein Git-Alias ist zu vergleichen mit einem Shortcut. Aliasse werden z.b.
auch beim Arbeiten mit der Bash-Konsole eingesetzt. Aliase werden gebraucht um kürzere Befehle
zu realisieren. Sie ermöglichen effizienteres Programmieren. 

Nehmen wir zum Beispiel den git-checkout Befehl. 
Dieser Befehl wird häufig verwendet und muss immer wieder neu eingetippt werden. Mit den Git-Aliassen
jedoch kann man git-checkout z.B. in git.co verwandeln. Dies spart enorme Schreibarbeit über längere Zeit
und verliert dennoch nicht an Wirksamkeit.

### Wie funktionieren Aliasse?
Um Aliasse festzulegen, müssen wir diese in der gitconfig-Datei definieren. Dort erstellen wir das
Stichwort [alias]. Danach könnte das etwa so aussehen:
```
[alias]
    st = status
    ci = commit -v
 ```
Die Aliasse können beliebig definiert werden, Ziel davon soll nur sein, die Schreibarbeit zu
minimieren und das eigene Programmieren praktischer zu machen.
