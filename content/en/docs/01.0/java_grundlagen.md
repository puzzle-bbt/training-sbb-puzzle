---
title: "Java Grundlagen"
linkTitle: "Java Grundlagen"
weight: 110
sectionnumber: 1.1
description: >
  Java Grundlagen
---


# Ziele

- Ich weiss, was eine Klasse ist
- Ich weiss, was Variablen und Datentypen sind
- Ich kenne die wichtigsten Datentypen in Java: int, double, boolean, char, String, Array
- Ich kann eine Variable deklarieren und initialisieren
- Ich weiss, was eine statische Methode ist und kann sie aufrufen
- Ich verstehe den Unterschied zwischen Methoden, die einen Wert zurückgeben, und Methoden, die keinen Wert zurückgeben, und kann den entsprechenden Methodenkopf richtig schreiben
- Ich kann Methoden schreiben, die Parameter entgegennehmen
- Ich weiss, dass jede Anweisung mit einem Strichpunkt abgeschlossen werden muss
- Ich weiss, dass geschweifte Klammern einen Scope definieren und ich verwende sie in jeder Kontrollstruktur, um die Code-Blocks voneinander abzugrenzen (lieber zu viel klammern als zu wenig)
- Ich kenne die Main-Methode und weiss, warum eine Applikation nur EINE Main-Methode haben sollte
- Ich kenne die Methode 'System.out.println' und kann sie anwenden
- Ich kann eine Eingabe von der Konsole lesen und in einer Variablen speichern
- Ich kann arithmetische Ausdrücke schreiben: Addition, Subtraktion, Multiplikation, Division, Modulo (Rest einer Division)
- Ich kenne die relationalen Operatoren: ==, >=, <=, >, <, !=
- Ich kenne die booleschen Operatoren: && (AND), || (OR), ! (NOT), ^(XOR)
- Ich weiss, was eine bedingte Anweisung ist und kann sie korrekt anwenden
- Ich kann eine Schleife programmieren: for-Loop und while
- Ich kenne die switch-Anweisung


# Ansprechspersonen

Ann-Sophie Junele Nadia Suter Claudio Zesiger

| Autor | Version | Datum | Änderungen |
|-|-|-|-|
| Ann-Sophie Junele | 0.1 | Mai 2020 | - Initiale Version erstellt |
| Claudio Zesiger | 0.2 | 23.07.2020 | - Modul überprüft |
|  |  |  |  |


# Inhalt

1. Einführung
2. Terminologie
3. Hello World
4. Variablen
5. Datentypen
5.1 Primitive Datentypen
5.1.1 Integraler Datentyp (byte, short, int, long)
5.1.2 Gleitkomma-Datentyp (float, double)
5.1.3 Zeichen-Datentyp (char)
5.1.4 Logischer Datentyp (boolean)
5.2 Referenzdatentypen
5.2.1 Strings
5.2.2 Arrays
6. Scanner-Klasse
7. Statische Methoden
8. Mathematik & Logik
9. Kontrollstrukturen


# Cheatsheet zum Downloaden

![Java-CheatSheet_Edureka.pdf](Java-CheatSheet_Edureka.pdf)


# 1. Einführung


## Was ist Java?
Java ist eine objektorientierte Programmiersprache, die schon seit ca. zwei Jahrzehnten grosse Popularität geniesst.Die Entwicklung von Java begann Anfang der 1990er-Jahre beim US-amerikanischen Hard- und Softwarehersteller Sun Microsystems.1995 wurde die erste Version veröffentlicht. 2010 wurde Sun Microsystems von Oracle übernommen.Gegenwärtig erscheinen im Halbjahrestakt neue Java-Versionen; die neuste Version, Java 14, wurde im März 2020 veröffentlicht.

## Wichtigste Merkmale von Java

### Plattformunabhängigkeit: «Write once, Run anywhere»
Der Compiler wandelt den Quellcode in Bytecode um, und anschliessend führt die Java Virtual Machine (JVM) den Bytecode aus.Jedes Betriebssystem hat eine andere JVM, aber jede JVM kann den Bytecode ausführen, daher kann ein- und dieselbe Java-Anwendung auf Windows, Linux, Mac OS und anderen Plattformen laufen.

### Mehrfach-Paradigma
Java ist in erster Linie eine objektorientierte und imperative Programmiersprache, bei der fast alles ein Objekt einer Klasse (eines Typs) ist.Wir können ein typisches Java-Programm als eine Menge von interagierenden Objekten betrachten. Die Objekte können Entitäten aus der realen Welt oder eine Art von Programmierabstraktionen darstellen.Wenn wir ein Programm schreiben, erklären wir, wie die Objekte miteinander interagieren sollen.Java unterstützt aber auch andere Programmierparadigmen, darunter generische Programmierung, parallele Programmierung, funktionale Programmierung (teilweise unterstützt) und andere.

### Garbage Collector
Der Garbage Collector (Teil der JVM) führt zur Laufzeit eine automatische Speicherbereinigung von unbenutzten Objekten durch.

### Multithreading
Java unterstützt Multithreading auf der Ebene der Sprache und der Standardbibliothek. Es ermöglicht die gleichzeitige und parallele Ausführung mehrerer Teile eines Java-Programms.

## Code, Compile, Run
Ein/e Java-Entwickler/in schreibt ein Programm in eine Textdatei mit der Erweiterung .java. Ein Programm kann eine Vielzahl solcher Dateien enthalten. Dann übersetzt der Compiler (normalerweise javac) das Programm in eine .class-Datei, die den Bytecode des Programms enthält. Danach führt die JVM das Programm aus und gibt Low-Level-Befehle an den Computer. Der Computer ist hier eine Abstraktion, die ein Server, ein PC oder sogar ein mobiles Gerät sein kann.Tatsächlich sind die Prozesse komplexer, als hier gezeigt wird. Es ist wichtig, Folgendes zu verstehen: Der Teil vor der JVM ist plattformunabhängig, der Teil nach der JVM ist plattformabhängig.
![java_behind_the_scenes.png](java_behind_the_scenes.png)

# 2. Terminologie
**Programm** - eine Folge von Anweisungen (engl. &ldquo;statement&rdquo;), welche nacheinander ausgeführt werden (von oben nach unten)
**Anweisung (statement)** - eine einzelne Aktion, wie zum Beispiel das Ausgeben eines Satzes auf der Konsole. Ein Statement wird mit einem Semikolon abgeschlossen
**Block** - eine Gruppe von null, einer oder mehreren Anweisungen, die von einem Paar geschweifter Klammern {...} eingeschlossen ist
**Methode** was in anderen Programmiersprachen als «Funktion» bezeichnet wird, heisst in Java «Methode». Eine Methode ist eine Folge von Anweisungen, welche eine bestimmte Aufgabe ausführt (auch bekannt als Unterprogramm oder Prozedur)
**Syntax** - eine Reihe von Regeln, die definieren, wie ein Programm geschrieben werden muss, um gültig zu sein; Java hat seine eigene spezifische Syntax, die wir lernen werden
**Keyword** - ein Wort, das in der Programmiersprache eine besondere Bedeutung hat (public, class und viele andere). Diese Wörter können nicht als Variablennamen verwendet werden.
**Bezeichner (identifier) oder Name** ein Wort, das sich auf etwas in einem Programm bezieht (z. B. eine Variable oder einen Methodennamen)
**Kommentar** Eine Erklärung dazu, was eine bestimmte Anweisung oder Methode tut. Java-Kommentare beginnen mit // (einzeilige)
**Whitespace **- Tabulator- oder Leerzeichen dienen lediglich der Lesbarkeit, vom Compiler werden sie ignoriert

# 3. Hello World
Anhand des simplen Hello-World-Programms können wir bereits vieles über die zentralen Bestandteile einer Java-Anwendung erklären.
```
public class HelloWorld {
    public static void main(String args[]) {
        System.out.println("Hello, world!");
    }
}
```
## Public class
Java ist eine objektorientierte Sprache, daher muss jede Anweisung, die ausgeführt werden soll, in einer Klasse stehen. Also muss jedes Java-Programm mindestens eine Klasse haben. 
Die Deklaration der Klasse besteht aus dem Zugriffsmodifikator public (hierzu später mehr), dem Keyword class und dem Klassennamen. Hinweis: Der Klassenname muss mit dem Namen der jeweiligen Datei (HelloWorld.java) übereinstimmen.
Der Deklaration der Klasse folgt ein Paar geschweifter Klammern {…} - innerhalb dieser Klammern wird die Klasse definiert.

## Die Main-Methode
Die Main-Methode ist der Einstiegspunkt eines Java-Programmes. Das heißt, wenn ein Java-Programm gestartet wird, sucht die JVM nach der Main-Methode und beginnt dort mit der Ausführung des Programms. Darum sollte jedes Programm genau eine Main-Methode haben.
Die Main-Methode muss genauso geschrieben werden wie oben angeben wurde (Achtung: Java ist case-sensitive, unterscheidet also zwischen groß und kleingeschriebenen Buchstaben!).
Die Keywords public, static und void werden zu einem späteren Zeitpunkt behandelt. Mach dir auch keine Gedanken über String[] args, dabei handelt es sich um Argumente, die von außen ans Programm mitgegeben werden.

## "Hello World" ausgeben
Der Methoden-Körper (body) der Main-Methode besteht aus Anweisungen, die bestimmen, was getan werden soll, nachdem das Programm gestartet wurde.
println() ist eine statische Methode der Klasse System und diese gibt das in doppelten Anführungszeichen angegebene Literal «Hello, world!» auf der Konsole aus und fügt noch eine neue Zeile hinzu. Damit du diese Methode verwenden kannst, musst du über den Klassennamen System aufs Feld out und anschließend auf die Methode println() zugreifen. Was die Klasse System und ihre Felder und statischen Methoden genau sind – darüber brauchst du dir im Moment nicht den Kopf zu zerbrechen. Merke dir einfach, dass du System.out.println() verwendest, um Text auf der Konsole auszugeben.

# 4. Variablen

## Variablen benennen: 3 Regeln
1. Buchstaben von A bis Z sowie a bis z
2. Zahlen von 0-9, aber nicht am Anfang
3. Erlaubte Sonderzeichen: sind $ (das Dollarzeichen) und _ (Unterstrich).

### Best Practice
Benenne eine Variable so, dass klar ist, welcher Inhalt darin gespeichert werden soll, also beispielsweise sum für eine Variable, welche das Resultat einer Addition speichert. Wenn eine Variable aus mehreren Wörtern besteht, verwende camelCase (erster Buchstabe klein, dann jeder Anfangsbuchstabe eines Wortes gross). Dies könnte zum Beispiel so aussehen: numberOfEmployees.

## Variablen deklarieren
Unter der Deklaration einer Variable versteht man das erste "Erwähnen" einer Variable, welches dem Compiler sagt "Hallo, ich bin da und kann verwendet werden". In einer statisch typisierten Sprache wie Java bedeutet das auch, dass der deklarierte Typ der Variable festgelegt wird. Der Wert selbst wird bei der Deklaration nicht festgelegt. Zur Laufzeit wird für die Variable ein Bereich im Arbeitsspeicher reserviert. Hier können Werte, die der Variablen zugewiesen werden, gespeichert werden. Die Grösse des Speicherbereichs hängt von Typ der Variablen ab.Formal gilt:
```
<variable type> <variable identifier>;
```
Wir geben also den Datentypen und den Namen der Variable an. Wir werden gleich ein paar Beispiele sehen.

## Variablen initialisieren
Unter dem Begriff Initialisierung wird in der Regel das erste Zuweisen eines Wertes zu einer Variablen verstanden. Lokale Variablen (Variablen, die lediglich innerhalb einer Methode gültig sind) müssen initialisiert werden, bevor sie verwendet werden können. Beispiel:
```
public static void main(String[] args) {
    int firstSummand = 2;
    int secondSummand;
    int sum = firstSummand + secondSummand;
}
```
Die Variable "secondSummand" wurde nicht initialisiert, die Zuweisung "sum = firstSummand + secondSummand" geht also nicht.

### Deklarieren und initialisieren
Wir können eine Variable nacheinander deklarieren und dann initialisieren oder beides zusammen:
```
int number;     // 1. Deklaration
number = 2;     // 2. Initialisierung

int number = 2; // beides in einer Zeile
```

Formal:
```
<variable type> <variable identifier> = <initial value>;
```

# 5. Datentypen
In Java sind Variablen stark typisiert. Das heisst, dass alle Variablen bei ihrer Erstellung mit einem Datentyp versehen werden müssen (Bemerkung: seit Java 10 gibt es Typinferenz für lokale Variablen, das heisst, eine lokale Variable kann deklariert und initialisiert werden (muss gleichzeitig geschehen), ohne dass ein Datentyp angegeben werden muss - anstelle des Datentyps wird 'var' verwendet:
```
var sum = 20;
```
Es gibt zwei Arten von Datentypen: Primitive Datentypen und Referenztypen. Der grundlegende Unterschied besteht darin, dass eine primitive Variable den tatsächlichen Wert speichert, während eine Referenzvariable die Adresse des Objekts speichert, auf das sie sich bezieht.
![]()
Dieser fundamentale Unterschied ist relevant beim Vergleichen: Werte primitiver Variablen können mit **==** (einem Vergleichsoperator) verglichen werden, während Referenzvariablen mit **equals** (einer Methode) verglichen werden müssen - ausser es sei denn, dass geprüft werden soll, ob zwei Referenzen auf dasselbe Objekt zeigen (Identität) --> dann werden die Adressen mit == verglichen.

Wir schauen uns zunächst die **primitiven Datentypen** an.

## Primitive Datentypen
### Integraler Datentyp (byte, short, int, long)
Ein Integer ist eine Ganzzahl, d.h. ein Integer hat keine Dezimalstellen. Beispiele für eine Ganzzahl sind 3, 10, 8000, usw.
Es gibt vier verschiedene Datentypen, die ganzzahlige Werte speichern: byte, short, int und long. Der Unterschied liegt in ihrer Größe.

| Datentyp | Speicherbedarf | Bereich |
| --- | --- | --- |
| byte | 8 Bit | -128 ... 127 |
| short | 16 Bit | -32768 ... 32767 |
| int | 32 Bit | -2 147 483 648 ... 2 147 483 647 (-2^31 ...  2^31-1) |
| long | 64 Bit | -2^63 ... 2^63-1 |

Ihr braucht euch im Moment keine Gedanken über den Speicherbedarf eines Datentyps zu machen. Für die meisten Übungen empfiehlt es sich, int als Datentyp einer Variablen, die ganze Zahlen speichert, zu wählen.
Große Zahlen können mit einem Unterstrich geschrieben werden, um die Leserlichkeit zu verbessern, beispielsweise 1_000_000

Beispiele:
```
int result;           // deklariert, aber nicht initialisiert
int count = 0;        // deklariert und initialisiert
int sum = 20_000_000; // deklariert und initialisiert
```

### Gleitkomma-Datentyp (float, double)
Dieser Datentyp speichert Zahlen, die einen Dezimalpunkt enthalten, zum Beispiel 2.34, 10.0, 12.343434, usw.
Bedenke, dass Gleitkommawerte nur eine Annäherung an den Dezimalwert und nicht den genauen Wert speichern.
Gleitkommawerte haben zwei Typen: float und double. Der Hauptunterschied zwischen den beiden besteht darin, dass einem double 64 Bit zur Speicherung einer Gleitkommazahl zur Verfügung stehen und dieser damit eine höhere Genauigkeit hat als ein float, der nur 32 Bit hat.

Beispiele:
```
float radius = 8.56f; // Dem Wert eines Floats muss ein f folgen
double radius = 8.56;
```
Trotz Nachkommastellen dürfen Fliesskommzahlen des Typs float niemals zur Berechnung von Währungen verwendet werden. Innerhalb von Java wird ein float stets als Dezimalbruch geführt und die Ungenauigkeit verunmöglicht es diesen Datentyp für Währungsrechnungen zu verwenden. 

### Zeichen-Datentyp (char)
Ein char ist ein (vorzeichenloser) 16-Bit-Integer-Datentyp, der ein einzelnes Zeichen darstellt. Dieser Datentyp erlaubt die Repräsentation von Zeichen im so genannten Unicode-Zeichensatz.
Ein einzelnes Zeichen kann eine Ziffer, einen Buchstaben oder ein anderes Symbol sein. Um ein Zeichen zu schreiben, verwenden wir einfache Anführungszeichen wie folgt: 'A', 'B', 'C', 'x', 'y', 'z', '0', '1', '2', '9'.
Zeichenliterale können Symbole eines Alphabets, Ziffern von '0' bis '9', Whitespaces (' ') oder andere Zeichen oder Symbole ('$') darstellen.
Verwechsle nicht die Zeichen, die Zahlen (z.B. '9') darstellen mit den Zahlen selbst (z.B. 9).
Ein Zeichen kann nicht zwei und mehr Ziffern oder Buchstaben enthalten, da es nur ein einziges Symbol darstellt. Die folgenden zwei Beispiele sind falsch: 'abc', '543'. Sie sind zu lang.

Wir können Zeichen auf verschiedene Arten initialisieren:
| Typ | Code-Beispiel |
| --- | --- |
| Einfache Anführungszeichen | ``` char A = 'A'; ``` |
| Wir können ein Char-Literal als Integral-Literal angeben, das den Unicode-Wert des Zeichens darstellt, und Integral-Literale können entweder in Dezimal-, Oktal- oder Hexadezimalform angegeben werden. Der zulässige Bereich liegt zwischen 0 und 65535. | ``` char A = 65; ``` |
| Unicode-Darstellung: In der Unicode-Darstellung '\uxxxx' können Zeichenliterale angegeben werden. Hier steht xxxx für 4 Hexadezimalzahlen. | ``` char A = '\u0041'; ``` |

Beispiele:
```
char letter = 'a';
char point = '.';
letter++; // letter = 'b'
```

Don’t get confused:
123 ist ein Integer, "123" ist ein String;
'A' ein Zeichen (char), "A" ist ein String;
'1' ist ein Zeichen (char), 1 ist ein Integer;

### Logischer Datentyp (boolean)
Dieser Datentyp bezieht sich nur auf zwei Werte, true und false.
```
boolean done = false;
boolean isBigger = true;
```

## Referenzdatentypen
Nebst primitiven Datentypen gibt es Referenzdatentypen. Eine Variable diesen Typs enthält nicht die Werte selbst wie eine Variable primitiven Typs, sondern nur einen Verweis (Referenz) auf den
Speicherort der Daten. Der Standardwert von Referenzvariablen ist null, welcher besagt, dass die Variable auf kein Objekt verweist.
Es gibt zwei Unterarten von Referenztypen:
Array: Eine Datenstruktur fester Grösse, die dazu dient, mehrere Elemente gleichen Typs zu speichern
Objektdatentyp, welcher dazu dient, ein Objekt zu repräsentieren.

Wir werden im Folgenden auf den Datentyp String, welcher eine Zeichenkette repräsentiert, und auf die Datenstruktur Array genauer eingehen.

### Strings
Eine Variable, die eine Zeichenkette enthält, hat den Typ String.
```
String hello = "Hello, Java";
```
Diese Zeichenkette besteht aus 11 Zeichen, einschließlich eines Leerzeichens. Wie wir hier ebenfalls sehen, müssen String-Literale müssen von doppelten Anführungszeichen umgeben sein.

#### String ist eine Klasse
Jedes der Java-Programme, die du bisher gesehen haben, wurde als einzelne Klasse definiert, die einige Methoden enthält. Eine Klasse in Java hat zwei Zwecke:
Eine Klasse enthält eine Sammlung von Methoden, die du aufrufen kannst
Eine Klasse definiert einen Datentyp und kann zum Erstellen von Objekten dieser Klasse verwendet werden.
Die String-Klasse dient beiden Zwecken: Sie bietet einige nützliche Methoden und definiert einen String-Datentyp, mit dem du Zeichenketten-Objekte erstellen kannst.

Schauen wir uns zuerst die erste Verwendung an. Die String-Klasse steht irgendwo in einer Java-Datei namens String.java geschrieben. Sie enthält mehrere statische Methoden. Statische Methoden werden über den Klassennamen aufgerufen:
```
<ClassName>.<methodName>()
```
Bevor du die statischen Methoden einer Klasse verwenden kannst, musst du normalerweise diese Klasse importieren. Zu statischen Methoden erfährst du später mehr. Die String-Klasse ist jedoch speziell und bereits integriert, d.h. du musst die String-Klasse nicht importieren.

Schauen wir uns als Beispiel für eine statische Methode der String-Klasse die Methode valueOf an. Es wird ein einzelner Parameter benötigt, der beispielsweise double, int oder boolean sein kann. Anschließend wird eine Zeichenkette dieses Parameters erstellt und zurückgegeben. Dies sieht so aus:
```
public class StringExampleOne {
    public static void main(String args[]) {
        String myFavoriteNumber;
        int x = 42;
        myFavoriteNumber = String.valueOf(x);
    }
}
```

#### Strings sind Objekte
Was Objekte genau sind, erfährst du in einem späteren Modul zur objektorientierten Programmierung. Merke dir hier einfach, dass ein String kein primitiver Datentyp wie ein int oder double ist – ein String ist ein Objekt.

Deklaration und Initialisierung eines Strings:
```
String name = "Rumpelstilzchen";
```
Mit dem Punkt-Operator kannst du auf nicht-statische Methoden der String-Klasse zugreifen:
```
String nameToUpper = name.toUpperCase();
```

#### Strings sind unveränderlich
String-Objekte können nach ihrer Erstellung nicht mehr geändert werden. Wenn also ein String-Objekt geändert wird, wird in Wirklichkeit ein neuer String erstellt. Um Änderungen am String zu speichern, müssen wir ihn daher dem neuen String zuweisen.
```
String name = "Rumpel"; 
name.concat("stilzchen"); // concat() method appends the string at the end 
System.out.println(name); // will print Rumpel because strings are immutable objects
```

String-Methoden
```
public class StringMethoden {
    public static void main(String[] args) {
        String house = "house";
 
        /**
         * Returns the char value at the specified index (indexing starts from 0).
         */
        char o = house.charAt(1);
        System.out.println(o);
 
        /**
         * Returns the length of this string.
         */
        int length = house.length();
        System.out.println(length);

        /**
         * Returns true if and only if this string contains the specified sequence of char values.
         */
        boolean isContaining = house.contains("us");
        System.out.println("\"house\" contains \"us\": " + isContaining);

        /**
         * Returns the index within this string of the first occurrence of the specified character.
         */
        int indexChar = house.indexOf('s');
        System.out.println(indexChar);

        /**
         * Returns the index within this string of the first occurrence of the specified substring.
         */
        int indexSubstring = house.indexOf("us");
        System.out.println(indexSubstring);

        /**
         * Tests if this string starts with the specified prefix (case sesitive: Unterschied, ob Gross- oder Kleinschreibung).
         */
        boolean startsWithPrefix = house.startsWith("Ho");
        System.out.println(startsWithPrefix);
        boolean startsWithPrefix2 = house.startsWith("ho");
        System.out.println(startsWithPrefix2);

        /**
         * Tests if this string ends with the specified suffix (case sesitive: Unterschied, ob Gross- oder Kleinschreibung).
         */
        boolean endsWithSuffix = house.endsWith("se");
        System.out.println(endsWithSuffix);

        /**
         * Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar.
         */
        String mouse = house.replace('h', 'm');
        System.out.println(mouse);

        String houseHouse = "House, House";
        String mouseMouse = houseHouse.replace('H', 'M');
        System.out.println(mouseMouse);

        /**
         * Returns a new string that is a substring of this string, starting from the specified index
         */
        String applePearLemon = "Apple, pear, lemon";
        String pearLemon = applePearLemon.substring(7);
        System.out.println(pearLemon);

        /**
         * Returns a new string that is a substring of this string
         */
        String pear = applePearLemon.substring(7, 11);
        System.out.println(pear);

        System.out.println();

        /**
         * Converts all of the characters in this String to upper case.
         */
        String apple = "Apple";
        String appleUpperCase = apple.toUpperCase();
        System.out.println(appleUpperCase);

        /**
         * Converts all of the characters in this String to lower case.
         */
        String appleLowerCase = apple.toLowerCase();
        System.out.println(appleLowerCase);

        System.out.println();

        /**
         * Splits this string around matches of the given regular expression (Muster in Form einer Zeichenkette),
         * puts them in a String array.
         */
        String applePear = "Apple, pear";
        String[] fruits = applePear.split(",\\s");    // \\s means whitespace
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        /**
         * Converts this string to a new character array.
         */
        char[] charArray = applePearLemon.toCharArray();
        for (char character : charArray) {
            System.out.println(character);
        }

        /**
         * Compares this string to the specified object. Works if other object is also a String
         * otherwise the equals method has to be overridden
         */
        String appleOne = "Apple";
        String appleTwo = "Apple";
        boolean isEqual = appleOne.equals(appleTwo);
        System.out.println(isEqual);

        /**
         * Compares two strings lexicographically. The comparison is based on the Unicode value of each character in the strings.
         * The result is a negative integer if this String object lexicographically precedes the argument string. The result is a positive integer if this String object                   
         * lexicographically follows the argument string. The result is zero if the strings are equal
         */
        String abcd = "abcd";
        String cdef = "cdef";

        if (abcd.compareTo(cdef) < 0){
            System.out.println(abcd + " precedes " + cdef);
        }

        if (house.compareTo(house) == 0){
            System.out.println(house + " is equal to " + house);
        }

        if(cdef.compareTo(abcd) > 0) {
            System.out.println(cdef + " follows " + abcd);
        }

        /**
         * Capital letters precede lower case letters
         */
        String houseLowerCase = "house";
        String houseUpperCase = "HOUSE";
        if (houseLowerCase.compareTo(houseUpperCase) > 0){
            System.out.println(houseUpperCase + " precedes + " houseLowerCase);
        }

        /**
         * Compares two strings lexicographically, ignoring case differences.
         */
        System.out.println(houseLowerCase.compareToIgnoreCase(houseUpperCase));
    }
}
```

### Arrays

#### Definition
Häufig benötigen Software-Entwickler mehrere zusammengehörige Variablen desselben Datentyps, die logisch oder verwaltungstechnisch zusammengehören. Es wäre aber sehr aufwendig, diese Variablen alle einzeln zu deklarieren und zu verarbeiten. Deswegen wird in Java, wie in anderen Programmiersprachen auch, die Verwendung von Arrays (deutsch etwa: Felder) unterstützt. In Arrays lassen sich alle primitiven Datentypen und alle Objekte speichern und systematisch bearbeiten. Alle Variablen haben einen gemeinsamen Namen, werden aber über unterschiedliche Indizes angesprochen.

#### Zweck
Speicherung und Verwaltung von Daten gleichen Typs

#### Deklaration
Die Deklaration eines Arrays enthält folgende Bestandteile:
| Reihenfolge |  |  |
| --- | --- | --- |
| 1 | Typ | String, int, double, char, ... |
| 2 | Eckige Klammern | [ ] |
| 3 | Bezeichner / Name | Beliebiger Variablenname |

#### Länge eines Arrays
Die Gesamtzahl der Elemente in einem Array wird als Länge eines Arrays bezeichnet. Diese Länge wird zum Zeitpunkt der Erstellung eines Arrays einmal festgelegt und kann später in einem Programm nicht mehr geändert werden. 
Wir können die Länge eines Arrays mithilfe einer in Java integrierten Funktionalität überprüfen: <arrayName>.length

#### Indizierung
Die Indizes in einem Array reichen immer von 0 bis length-1. Ein Array mit den ersten 100 natürlichen Zahlen hat beispielsweise eine Länge von 100 und Indizes von 0 bis 99.

#### Syntax
In Java müssen wir zum Zeitpunkt der Deklaration eines Arrays Folgendes angeben:
- den Datentypen,
- den Namen

... und zum Zeitpunkt der Initialisierung:
- die Größe

Syntaktisch können wir ein Array eines ganzzahligen Datentyps auf folgende Weise deklarieren:
```
int[] myArray;
int myArray[];
```

Dieser Code deklariert die Variable myArray, erstellt das Array-Objekt jedoch noch nicht. Das spezielle Schlüsselwort new wird in Java zum Erstellen von Objekten verwendet, einschließlich Arrays:
```
int[] myArray = new int[5];
```

Damit wird ein Array-Objekt der Länge 5 instanziiert. Die fünf Elemente dieses Arrays wurden mit Standardwerten initialisiert; bei einem Array des Datentyps int ist der Default-Wert 0.

Wir können auch direkt die Werte der Array-Elemente angeben:
```
int[] myArray = {10, 15, 20, 25, 30}; // es wird ein Array der Grösse 5 erstellt mit den Indizes 0 - 4
```

Damit wird automatisch ein Array mit der erforderlichen Länge erstellt und mit den angegebenen Werten initialisiert.

#### Zugriff auf Elemente
Wenn wir den Wert eines Elements in unserem Array verändern möchten, geschieht dies folgendermaßen:
```
myArray[index] = value;
```

Wenn wir einen Wert eines Array-Elements in einer Variablen außerhalb des Arrays speichern wollen:
```
int value = myArray[index];
```

# 6. Scanner-Klasse
```
import java.util.Scanner;

public class TakeInput {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Your name is: " + name);
    }
}
```

Eine Möglichkeit, Benutzereingaben in Java vorzunehmen, besteht in der Verwendung der Scanner-Klasse, die verwendet wird, indem zuerst die Definition der Klasse wie in Zeile 1 importiert und dann ein Objekt dieser Klasse wie in Zeile 6 erstellt wird.

Zeile 1
Der erste Schritt besteht darin, die Scanner-Klasse zu importieren, damit sie im folgenden Code verwendet werden kann. Die Java Scanner-Klasse stammt aus dem Paket java.util. Es ist einfach zu bedienen, muss jedoch importiert werden, damit die Klasse funktioniert. 

Zeile 6
- Wir deklarieren den Datentyp als Scanner und geben ihm den folgenden Bezeichner scanner
- Weise der Variable scanner diesen Ausdruck zu: new Scanner(System.in)
- Dieser Ausdruck bedeutet, dass wir ein neues Scanner-Objekt erstellen möchten, das Eingaben vom Benutzer entgegennimmt

Zeile 8
- Wir deklarieren eine Variable vom Datentyp String mit dem Bezeichner name
- Weise der Variable name den Ausdruck scanner.nextLine () zu
- Dies zeigt an, dass der erstellte Scanner über eine Methode namens nextLine () verfügt
- Diese Methode nimmt die Tastatureingabe von dem Benutzer, bis der Benutzer die Enter – Taste drückt

# 7. Statische Methoden

Mittlerweile hast du bereits einige statische Methoden kennengelernt, wie zum Beispiel die Main-Methode oder println() der Klasse System oder die Methode valueOf() der String-Klasse.Hier wollen wir uns nun genauer anschauen, was statische Methoden sind, denn diese wirst du für das Lösen der Übungen benötigen.Das Schlüsselwort **static** ist ein sehr nützliches Werkzeug in Java. Bei statischen Methoden sind einige wichtige Punkte zu beachten.
- Diese Methoden gehören nicht zu einem bestimmten Objekt, sondern zur gesamten Klasse.
- Diese Methode wird über den Klassennamen aufgerufen und nicht über eine Objektinstanz

Wenn also in einem Methodenkopf das Keyword **static** steht, weisst du, dass es sich um eine statische Methode handeln muss. Schauen wir uns unterschiedliche Methodendeklarationen an (folgendes gilt für statische Methoden wie auch für nicht-statische Methoden): Wenn eine Methode einen Wert an ihren Aufrufer zurückgeben soll, sprechen wir von einer **Methode mit einem Rückgabewert**.

```
public static <return-type> methodName() {
    // ...
    return returnValue; // der Typ des Rückgabewerts muss vom Typ sein, welcher im Methodenkopf steht
}
```

Wir sehen, dass in der Methodendeklaration angeben werden muss, welcher Typ zurückgegeben wird.
Wenn eine Methode keinen Wert zurückgegeben soll, verwenden wir das Keyword void:

Methode ohne Rückgabewert
```
public static void methodName() {
    // kein Rückgabewert
}
```

Wir können auch Werte einer Methode übergeben – hierbei sprechen wir von Methoden mit Parametern:

Methode mit Parametern
```
public static void methodName(type identifier) {
    
}
```

Ein Parameter besteht immer aus dem Datentyp und einem Bezeichner. Wir können beliebig viele Parameter (auch als Argumente bezeichnet) an eine Methode übergeben.

Einige Regeln:
- Die Reihenfolge der Schlüsselwörter im Methodenkopf darf nicht verändert werden
- Bei der Auswahl des Methodennamens müssen die gleichen Regeln wie bei der Benennung einer Variablen eingehalten werden
- Keine doppelten Methoden: Jede Methodensignatur darf in einer Klasse nur einmal vorkommen.

Aufrufen von statischen Methoden:
- Innerhalb der gleichen Klasse: methodName();
- Außerhalb: <ClassName>.<methodName>(); (Klasse importieren!)

# 8. Mathematik & Logik

Mathe in Java ist sehr einfach. Beachte, dass mathematische Java-Operationen einer bestimmten Reihenfolge folgen (Punkt vor Strich usw....)

## Arithmetische Operatoren

| **Symbol** | **Arithmetische Operation** | **Beispiel** | 
|-|-|-|
| + | Addition | ```int sum = 2 + 3;``` | 
| - | Subtraktion | ```int difference = 5 - 2;``` | 
| / | Division | ```int quotient = 15 / 5;``` | 
| * | Multiplikation | ```int product = 3 * 4;``` | 
| % | Division mit Rest | ```int remainder = 7 % 3;``` | 
| ++ | Post und Prä-Inkrement (1 addieren) | ```count++; // (count = count + 1)``` | 
| - - | Post und Prä-Dekrement (1 subtrahieren) | ```count--; // (count = count - 1)``` | 

### **Post- und Prä-Inkrement**
Das Inkrementieren und Dekrementieren von Variablen ist eine sehr häufige Operation, deshalb gibt es dafür einen speziellen Operator: ++ und --. Ausserdem gibt es zwei Varianten: Er kann vor der Variable stehen, wie in ++i (Präfix-Schreibweise), oder dahinter, wie bei i++ (Postfix-Schreibweise). Der Präfix-Operator verändert die Variable vor der Auswertung des Ausdrucks, und der Postfix-Operator ändert sie nach der Auswertung des Ausdrucks. Mit anderen Worten: Nutzen wir einen Präfix-Operator, so wird die Variable erst herauf- bzw. heruntergesetzt und dann der Wert geliefert. Und beim Post-Operator ist es genau umgekehrt.



|  | Erklärung | Beispiel | 
| --- | --- | --- |
| Inkrement - Postinkrement | Nachherige Werterhöhung | ```int i = 5;int c = i++; // c = 5``` | 
| Inkrement - Präinkrement | Vorherige Werterhöhung | ```int i = 5;int d = ++i; // d = 6``` |
| Dekrement - Postdekrement | Nachherige Wertverkleinerung | ```int i = 5;int e = i--; // e = 5``` | 
| Dekrement - Prädekrement | Vorherige Wertverkleinerung | ```int i = 5;int f = --i; // f = 4``` |

## Operatoren für Vergleiche

Das Ergebnis dieser Operationen ist aus der Menge { true, false }:
| Symbol | Vergleich | Beispiel | 
|-|-|-|
| >  | grösser als | 5 > 4 | 
| <  | kleiner als | 4 < 5 | 
| >= | grösser gleich | 3 >= 3 | 
| <= | kleiner gleich | 3 <= 3 | 
| == | gleich | 2 == 2 | 
| != | ungleich | 2 != 4 | 

## Boolsche Operatoren

Diese Operatoren basieren auf der boolschen Algebra. Daher arbeiten boolesche Operatoren direkt mit booleschen Werten. Es gibt vier Arten von booleschen Operatoren. Schauen wir uns zunächst ihre Symbole und deren Inhalt in der folgenden Tabelle an, bevor wir erläutern, welche Funktionen sie ausführen.

| Symbol | Boolesche Operation | Erklärung | 
|-|-|-|
| && | Logisches UND (AND) | **AND** gibt nur dann true zurück, wenn die Ausdrücke auf beiden Seiten des Operators true sind (Hinweis: Dieser Ausdruck wird lazy evaluiert, heisst, wenn der erste false ist, wird der zweite nicht mehr ausgewertet | 
| \|\| | Logisches ODER (OR) | **OR** gibt true zurück, wenn der Ausdruck auf einer oder beiden Seiten des Operators true ist (lazy evaluiert: wenn der erste Ausdruck true ist, wird der zweite nicht mehr ausgewertet) | 
| ! | Logisches NICHT (NOT) | **NOT** kehrt den Wert des darauffolgenden booleschen Ausdrucks um. | 
| ^ | Logisches ENTWEDER-ODER (XOR) | **XOR** gibt true zurück, wenn einer der Ausdrücke true und der andere false ergibt. |
| & | Logisches UND (AND) | Im Unterschied zu obigen AND werdet dieses immer **beide** Ausdrücke aus. | 
| \| | Logisches ODER (OR) | Im Unterschied zum obigen OR werdet dieses immer **beide** Ausdrücke aus. | 

# 9. Kontrollstrukturen

Kontrollstrukturen dienen dazu, den Ablauf eines Programms zu steuern. Damit bietet eine Kontrollstruktur die Möglichkeit, Programmteile nur unter gewissen Bedingungen (--> bedingte Anweisungen) auszuführen oder Programmteile zu wiederholen (--> Schleifen).

## Bedingte Anweisungen

Die **bedingte Anweisung** ist eine Konstruktion, mit der ein Programm abhängig vom Wert eines Booleschen Ausdrucks ( = ein Ausdruck, dessen Auswertung entweder true oder false ergibt) unterschiedliche Berechnungen durchführen kann.

### Der einfache if-Fall

Die einfachste Form der bedingten Anweisung besteht aus dem Schlüsselwort if, einem Booleschen Ausdruck und einem in geschweiften Klammern eingeschlossenen Körper.
```
if (expression) {
    // block: this code will be executed if the expression is true
}
```
Wenn der Ausdruck true ist, werden die Anweisungen im Codeblock ausgeführt. Andernfalls werden sie übersprungen.

### Der if-else-Fall
Der obige if-Fall kann mit dem Schlüsselwort else erweitert werden, um alternative Aktionen auszuführen, wenn der Ausdruck false ist:
```
if (expression) {   
    // do something
} else {
    // do something else
}
```
In diesem Fall wird, wenn der Ausdruck lautet true, der erste Codeblock ausgeführt. Andernfalls wird der zweite Codeblock ausgeführt, jedoch nicht beide zusammen.

Im folgenden Beispiel gibt das Programm je nach Wert von num (gerade oder ungerade) unterschiedlichen Text aus.
```
int num = ...;  // the num is initialized by some value
if (num % 2 == 0) {
    System.out.println("It's an even number");
} else {   
    System.out.println("It's an odd number");
}
```

Da eine Zahl nur gerade oder ungerade sein kann, wird nur eine Nachricht angezeigt. Wenn num 10 ist, wird das Programm "It's an even number" ausgeben. Wenn der Wert 11 ist, wird "It's an odd number" ausgegeben.

### Die komplexeren Fälle
```
if (expression0) {
    // do something
} else if (expression1) {
    // do something else 1
    // ...
} else if (expressionN) {
    // do something else
} else {
    // in all other cases: do this…
}
```

Der folgende Code gibt als Beispiel Empfehlungen dazu aus, welchen Computer du je nach Budget kaufen solltest.
```
long dollars = ...; // your budget
if (dollars < 1000) {
    System.out.println("Buy a laptop");
} else if (dollars < 2000) {
    System.out.println("Buy a personal computer");
} else if (dollars < 100_000) {
    System.out.println("Buy a server");
} else {
    System.out.println("Buy a data center or a quantum computer");
}
```

### Switch
Die switch-Anweisung bietet eine Möglichkeit, basierend auf dem Wert einer einzelnen Variablen (kein Ausdruck!) Zwischen mehreren Fällen zu wählen. Die Variable kann eine Ganzzahl, ein Zeichen, eine Zeichenfolge oder eine Aufzählung sein. Die letzten beiden Typen werden weiter untersucht.
```
switch (variable) {
    case value1:
        // do something here
        break;
    case value2:
        // do something here
        break;
    //... other cases
    case valueN:
        // do something here
        break;
    default:
        // do something by default
        break; // it can be omitted
}
```

Die Schlüsselwörter switch und case werden hier immer benötigt. Die Schlüsselwörter break und default sind optional. Das Schlüsselwort break stoppt die Ausführung der gesamten switch-Anweisung, nicht nur eines Falls.

Wenn ein Fall nicht über das break-Schlüsselwort verfügt, wird auch der folgende Fall ausgewertet. Der Default-Fall wird ausgewertet, wenn kein Fall mit dem Variablenwert übereinstimmt.

## Schleifen (Loops)

### For-Loop
Manchmal müssen wir einen Codeblock eine bestimmte Anzahl von Malen wiederholen. Zu diesem Zweck stellt Java die Schleife bereit.  Diese Schleife wird häufig verwendet, um über einen Wertebereich oder durch ein Array zu iterieren. Wenn die Anzahl der Iterationen oder die Bereichsgrenzen bekannt sind, wird empfohlen, die for-Schleife zu verwenden. Wenn sie unbekannt sind, kann die while-Schleife eine bevorzugte Lösung sein.

Die grundlegende For-Loop-Syntax:
```
for (initialization; condition; modification) {
    // do something
}
```

Bevor die Schleife beginnt, wird einmal die Initialisierungsanweisung (initialization) ausgeführt. Wir bezeichnen diese Variable als Schleifenvariable.
Die Bedingung (condition) ist ein boolescher Ausdruck, der die Notwendigkeit der nächsten Iteration bestimmt. Wenn die Auswertung der Bedingung false ist, wird die Schleife beendet – ansonsten folgt eine weitere Iteration
Die Modifikation ist eine Anweisung, die den Wert der Schleifenvariablen ändert. Sie wird nach jeder Iteration aufgerufen. Normalerweise wird die Variable der Schleife inkrementiert oder dekrementiert.

Innerhalb des Schleifenkörpers kann das Programm alle korrekten Java-Anweisungen ausführen. Es kann sogar andere Schleifen enthalten.
```
int n = 9;
for (int i = 0; i <= n; i++) {
    System.out.print(i + " ");
}
// Output: 0 1 2 3 4 5 6 7 8 9
```

Die in der Initialisierungsanweisung deklarierten Variablen sind nur innerhalb des Bereichs sichtbar, der alle Teile der Schleife enthält: die Bedingung, den Hauptteil und die Änderung.

Die Schleifenvariable wird meistens mit  i, j, k oder index benennt.

Hier ist ein weiteres Beispiel. Berechnen wir die Summe der Ganzzahlen von 1 bis 10 mit der for-Schleife.
```
int startIncl = 1, endExcl = 11;
int sum = 0;
for (int i = startIncl; i < endExcl; i++) {
    sum += i;
}
System.out.println(sum);        // Output: 55
```

### For-Each-Loop
Wenn aus einem Array oder einer Collection (mehr dazu in einem anderen Modul) alle Werte "besucht" werden sollen, kann dies selbstverständlich mit einem einfachen for-Loop erledigt werden. Dies würde dann wie folgt aussehen:
```
int[] numbers = new int[] { 1, 2, 3, 4, 5 };
int sum = 0;
for (int i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
System.out.println(sum);        // Output: 15
```

Dieser For-Loop kann aber durch einen einfacheren For-Each-Loop ersetzt werden, dieser sieht dann wie folgt aus:
```
int[] numbers = new int[] { 1, 2, 3, 4, 5 };
int sum = 0;
for (int number: numbers) {
    sum += number;
}
System.out.println(sum);        // Output: 15
```
Anstatt einer Schleifenvariablen für den Array-Index verwenden wir einen direkten Zugriff auf ein konretes Element im Array.
Beachte, dass immer alle Elemente des Arrays besucht werden.

### While-Loop
Die while- Schleife besteht aus einem Codeblock und einer Bedingung (einem booleschen Ausdruck). Wenn die Bedingung erfüllt ist, wird der Code innerhalb des Blocks ausgeführt. Dieser Code wird solange wiederholt, bis die Bedingung nicht mehr erfüllt ist.
Die grundlegende Syntax der while-Schleife lautet wie folgt:
```
while (condition) {
    // body: do something
}
```

Der Körper einer Schleife kann alle korrekten Java-Anweisungen enthalten, einschließlich bedingter Anweisungen und sogar anderer Schleifen (verschachtelte Schleifen).

Es ist auch möglich, eine Endlosschleife zu schreiben, wenn die Bedingung unveränderlich ist.
```
while (true) {
    // body: do something indefinitely
}
```

Beispiel: Die folgende Schleife gibt Ganzzahlen aus, während eine Variable kleiner als 5 ist.

```
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
/* Output:
 * 0
 * 1
 * 2
 * 3
 * 4
 */
```

### Do-While-Loop
Der Do-While-Loop funktioniert analog dem normalen While-Loop mit einem einzigen Unterschied. Die Prüfung der Bedingung geschieht am Ende des Loops und damit wird dieser Loop in jedem Fall mindestens einmal ausgeführt.
```
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
/* Output:
 * 0
 * 1
 * 2
 * 3
 * 4
 */
