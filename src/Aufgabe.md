# Hausaufgabe WID 1 - Wikipedia

Wikipedia ist ein Beispiel für eine statische Webseite: Im Gegensatz zu einer dynamischen Webapp werden wenig Interaktionen angeboten und vor allem Inhalte (Text, Bilder) dargestellt. In dieser Übung wirst du das Design von Wikipedia nachbilden und dich dabei etwas mehr mit HTML (für die Anordnung und Strukturierung der Elemente) und CSS (für die Darstellung) vertraut machen.

## Vorbereitung / Vorgehen
1. Schaue dir zunächst kurz einige Artikel auf Wikipedia.org an. Wie ist die Webseite aufgebaut? Welche Bestandteile kommen häufig vor und wie sind sie angeordnet? Konzentriere ich dabei ganz auf den Artikel/Lemma Bereich, und ignoriere die linke und rechte Seitenleiste sowie die Wikipedia-Kopfleiste, welche für jeden Artikel gleich sind.

2. Bevor du mit der Bearbeitung der Hausaufgabe beginnst, lies dir die Aufgabe einmal komplett durch. Die Anforderungen benennen, was umgesetzt werden sollte. Plane etwa 2h für die Bearbeitung ein.

3. Forke das Projekt in deinen Stack Blitz Account, bevor du den Code editierst.


4. Nimm dir ausserdem Zeit um offene Fragen zu klären - dafür kannst du die Referenzen (siehe Links) oder die KI als Tutor benutzen. HTML und CSS bleiben für alle weiteren Modultage im Themenblock "Frontend" relevant.


## Aufgabe und Anforderungen

Erstelle mit HTML und CSS einen einfachen Wikipedia-Artikel. Nutze die App.js Datei für deinen HTML Code und die styles.css Datei für CSS Deklarationen. Verwende passendene Selektoren, um HTML-Elemente mit CSS-Stilen zu verbinden. 
Als Vorlage dient dir dabei der Eintrag zur [FHNW](https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz). Im Projektordner findest du die Datei Wikipedia.png. Diese zeigt dir, welche Bereiche für die Hausaufgabe relevant sind - alles andere kannst du ignorieren. Die roten Markierungen werden nachfolgend erklärt.

Dein Artikel soll mindestens diese Bestandteile haben:

- [ ] Der Artikel hat eine Überschrift (-> a). Verwende dafür das passende _semantische_ HTML-Element. Bedenke auch, dass du Überschriften für Unterkapitel brauchen könntest.
- [ ] Der Inhalt besteht aus einem Einleitungstext sowie einer Box mit schnellen Fakten (->b). Für den Text kannst du einen "Lorem Ipsum"-Generator verwenden. Siehe Tipps, wie du beide Komponenten nebeneinander anordnen kannst.
- [ ] Im Text (-> c) sollten einige Begriffe in Fettschrift hervorgehoben werden und ein Link (z.B. zu Wikipedia) vorhanden sein. Dieser sollte in einem neuen Browser-Tab öffnen.
- [ ] Die Box mit den schnellen Fakten (-> d) hat eine Umrandung, einen hellgrauen Hintergrund und eine Überschrift. Die Überschrift ist kleiner als deine Überschrift (-> a) und der Hintergrund ist dunkler als der der Box.
- [ ] Ein Bild ist vorhanden (-> e). Siehe dazu die Tipps. Die Grösse kannst du mit "height", "width" und ggf. weiteren Attributen steuern.
- [ ] Beachte die tabellarische Anordnung in zwei Spalten (-> f). Am einfachsten verwendest du wieder Flexbox. Alternativ liesse sich auch eine HTML-Tabelle definieren und die Gitterlinien ausblenden. Für die zweite Spalte reicht Text oder je ein Link. Beachte die unterschiedliche Textgestaltung zwischen beiden Spalten.

## Abgabe: 
Wenn du mit der Bearbeitung fertig bist, checke deine Änderungen in Git ein. Gib dann den Link zu deinem Repository auf Moodle ab. Bitte gib keinen Code ab, der mit KI generiert wurde.

## Tipps:
- b. Text und Box sind zwei Spalten einer (imaginären) Tabelle. Ohne Stilanweisungen nimmt der Text die volle Breite ein und die Box folgt auf der Zeile darunter. Dieses hat wieder damit zu tun, dass es sich um Box-Elemente handelt. Um beide aber nebeneinander anzuordnen, benötigst du Flexbox. Erstell ein div-Elternelment (dein _Container_) und zwei div-Kindelemente (die _Spalten_). Definiere flex auf dem Elternelement - du benötigst "display" und "flex-direction". Die Breite der Spalten kannst du auf den Kindelementen definieren, z.B. als Prozentwert.
- c. Damit der Link in einem neuen Tab öffnet, brauchst du ein zusätzliches Attribut.
- e. Am einfachsten nimmst du ein Bild von Wikipedia. Um einen Direktlink zu dem Bild zu erhalten, klickst du zunächst auf das Bild. Dieses öffnet in den meisten Fällen das Bild in Grossansicht, zusammen mit der Wikipedia UI. Führe jetzt einen Rechtsklick auf das Bild aus und wähle die Option "Grafik in neuem Tab öffnen" (o.ä, je nach Browser). Das Bild öffnet sich in einem neuen Tab. Kopiere dann die URL aus der Eingabezeile des Browsers und verwende sie für das Bildelement.
- f. Für HTML-Tabellen gibt es im Internet Generatoren, welche die Erstellung vereinfachen. Für Flexbox gehst du wie in b. vor.

## Links:

- HTML Referenz: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
- CSS Referenz: https://developer.mozilla.org/en-US/docs/Web/CSS
- Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
