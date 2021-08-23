---
title: "Java Grundlagen"
linkTitle: "Java Grundlagen"
weight: 1
description: >
  Java Grundlagen
---


#### Ziele
* Ich weiss, was eine Klasse ist
* Ich weiss, was Variablen und Datentypen sind
* Ich kenne die primitiven Datentypen in Java: boolean, byte, short, int, long, double, float, char
* Ich kenne die Klasse String
* Ich kenne Arrays und kann diese instanzieren, ihnen Werte von Indexen entnehmen und Werte an Indexe zuweisen
* Ich kann eine Variable deklarieren und initialisieren
* Ich weiss, was eine statische Methode ist und kann sie aufrufen
* Ich verstehe den Unterschied zwischen Methoden mit und ohne Rückgabewert
* Ich kann eine Methodensignatur für Methoden mit und ohne Rückgabewert richtig schreiben
* Ich kann Methoden schreiben, die Parameter entgegennehmen
* Ich weiss, dass jede Anweisung mit einem Strichpunkt abgeschlossen werden muss
* Ich weiss, dass geschweifte Klammern einen Block definieren und ich verwende sie in jeder Kontrollstruktur, um die Code-Blocks voneinander abzugrenzen (lieber zu viel klammern als zu wenig)
* Ich kenne die Main-Methode und weiß, warum eine Applikation nur EINE Main-Methode haben sollte
* Ich kenne die Methode 'System.out.println' und kann sie anwenden
* Ich kann eine Eingabe von der Konsole lesen und in einer Variablen speichern
* Ich kann arithmetische Ausdrücke schreiben: Addition, Subtraktion, Multiplikation, Division, Modulo (Rest einer Division)
* Ich kenne die relationalen Operatoren: ==, >=, <=, >, <, !=
* Ich kenne die booleschen Operatoren: && (AND), || (OR), ! (NOT), ^(XOR)
* Ich weiß, was eine bedingte Anweisung ist und kann sie korrekt anwenden
* Ich kann eine Schleife programmieren: for, foreach, while und do-while
* Ich kenne die switch-Anweisung

#### Änderungskontrolle
| Autor | Version | Datum | Änderungen |
| --- | --- | --- | --- |  
| Ann-Sophie Junele | 0.1 | Mai 2020 | * Initiale Version erstellt |
| Claudio Zesiger | 0.2 | 23.07.2020 | * Modul überprüft |

#### Cheatsheet zum Downloaden

![Cheatsheet](../java-grundlagen/chaetsheet.pdf "Cheatsheet")

---

## Einführung

### Was ist Java?
Java ist eine objektorientierte Programmiersprache, die schon seit ca. zwei Jahrzehnten große Popularität genießt.
Die Entwicklung von Java begann Anfang der 1990er-Jahre beim US-amerikanischen Hard- und Softwarehersteller Sun Microsystems.
1995 wurde die erste Version veröffentlicht. 2010 wurde Sun Microsystems von Oracle übernommen.
Gegenwärtig erscheinen im Halbjahrestakt neue Java-Versionen; die neuste Version, Java 16, wurde im März 2021 veröffentlicht.

---

### Wichtigste Merkmale von Java

#### Plattformunabhängigkeit

> «Write once, Run anywhere»

Der Compiler wandelt den Quellcode in Bytecode um (Kompilat) und anschliessend führt die Java Virtual Machine (JVM) den Bytecode aus.
Jedes Betriebssystem hat eine andere JVM, aber jede JVM kann den Bytecode ausführen, daher kann ein- und dieselbe Java-Anwendung auf Windows, Linux, Mac OS und anderen Plattformen lauffähig sein.

#### Mehrfach-Paradigma
Java ist in erster Linie eine objektorientierte und imperative Programmiersprache, bei der fast alles ein Objekt einer Klasse (eines Typs) ist.
Wir können ein typisches Java-Programm als eine Menge von interagierenden Objekten betrachten. Die Objekte können Entitäten aus der realen Welt oder eine Art von Programmierabstraktionen darstellen.
Wenn wir ein Programm schreiben, erklären wir, wie die Objekte miteinander interagieren sollen.
Java unterstützt aber auch andere Programmierparadigmen, darunter generische Programmierung, parallele Programmierung, funktionale Programmierung (teilweise unterstützt) und andere.

#### Garbage Collector
Der Garbage Collector (Teil der JVM) führt zur Laufzeit eine automatische Speicherbereinigung von unbenutzten Objekten durch. Der Entwickler muss sich also nicht um das Aufräumen von unbenutzen Objekten kümmern.

#### Multithreading
Java unterstützt Multithreading auf der Ebene der Sprache und der Standardbibliothek. Es ermöglicht die gleichzeitige und parallele Ausführung mehrerer Teile eines Java-Programms.

---

### Code, Compile, Run
Ein/e Java-Entwickler/in schreibt ein Programm in eine Textdatei mit der Erweiterung .java. Ein Programm kann eine Vielzahl solcher Dateien enthalten. Dann übersetzt der Compiler (normalerweise javac) das Programm in eine .class-Datei, die den Bytecode des Programms enthält. Danach führt die JVM das Programm aus und gibt Low-Level-Befehle an den Computer. Der Computer ist hier eine Abstraktion, welche ein Server, ein PC oder sogar ein mobiles Gerät sein kann.
Tatsächlich sind die Prozesse komplexer, als hier gezeigt wird. Es ist wichtig, Folgendes zu verstehen: Der Teil vor der JVM ist plattformunabhängig, der Teil nach der JVM ist plattformabhängig.

![codeCompileRun](../java-grundlagen/codeCompileRun.png "Code, Compile, Run")

---

## Terminologie

| Begriff | Beschreibung |
| --- | --- |
| Programm | Eine Folge von Anweisungen (engl. “statement”), welche nacheinander ausgeführt werden (von oben nach unten) |
| Anweisung (statement) | Eine einzelne Aktion, wie zum Beispiel das Ausgeben eines Satzes auf der Konsole. Ein Statement wird mit einem Semikolon abgeschlossen |
| Block | Eine Gruppe von keiner, einer oder mehreren Anweisungen, die von geschweiften Klammern {...} umgeben ist |
| Methode | Was in anderen Programmiersprachen als «Funktion» bezeichnet wird, heißt in Java «Methode». Eine Methode ist eine Folge von Anweisungen, welche eine bestimmte Aufgabe ausführt (auch bekannt als Unterprogramm oder Prozedur) |
| Syntax | Eine Reihe von Regeln, die definieren wie ein Programm geschrieben werden muss, um gültig zu sein. Es handelt sich um eine Art Grammatik |
| Keyword | Ein Wort, welches in der Programmiersprache eine besondere Bedeutung hat (public, class und viele andere). Diese Wörter können nicht als Variablennamen verwendet werden |
| Bezeichner (identifier) oder Name | Ein Wort, das sich auf etwas in einem Programm bezieht (z. B. eine Variable oder einen Methodennamen) |
| Kommentar | Eine Erklärung dazu, was eine bestimmte Anweisung oder Methode macht. Einzeilige Java-Kommentare beginnen mit // und mehrzeilige sind von den Zeichen /* */ umgeben |
| Whitespace | Tabulator- oder Leerzeichen dienen lediglich der Lesbarkeit, vom Compiler werden sie ignoriert |

---

## Hello World
Anhand des simplen Hello-World-Programms können wir bereits vieles über die zentralen Bestandteile einer Java-Anwendung erklären. Der folgende Sourcecode ist in einer Datei mit dem Namen HelloWorld.java abgelegt.
```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

#### Public class
Bei diesem Beispiel arbeiten wir uns nun von aussen nach innen vor. Der erste Teil definiert eine neue Klasse mit dem Namen _HelloWorld_. Die Deklaration der Klasse besteht aus dem Zugriffsmodifizierer _public_ (dazu später mehr) gefolgt vom Keyword _class_ und dem Klassennamen. Jede Java-Datei darf nur eine Klasse mit dem Zugriffsmodifizierer _public_ enthalten, weitere Klassen ohne _public_ sind jedoch erlaubt. Der Name der Klasse mit dem Modifizierer _public_ muss stets mit dem Dateinamen übereinstimmen. Der Klassenname wird stets gross geschrieben, einzelne Wörter werden durch einen erneuten Grossbuchstaben getrennt. Dies wird CamelCase genannt. Der _Block_ der Klasse wird durch geschweifte Klammern angegeben.

#### Die Main-Methode
Innerhalb der Klasse wird nun eine Main-Methode definiert. Diese Methode ist der Einstiegspunkt eines jeden Java-Programms. Nur über eine solche Methode kann eine Java-Anwendung gestartet werden. Die Methode besteht aus dem Zugriffsmodifizierer _public_, dem Keyword _static_, dem Rückgabewert _void_ und dem Methodennamen _main_.
An den Namen der Methode schliesst sich ein paar runde Klammern an. Innerhalb dieser Klammern befinden sich die _Parameter_ der Methode, in diesem Fall handelt es sich um ein _String_-_Array_. Die Angabe der genannten Teile einer Methode nennt man Methodensignatur. Der _Block_ der Methode wird durch geschweifte Klammern angegeben. Die Main-Methode hat immer die oben gezeigte Signatur.

#### "Hello World" ausgeben
Innerhalb der Main-Methode sehen wir ein einzelnes Statement. Es besteht aus einer einfachen Anweisung, welche den Text "Hello, world!" auf die Kommandozeile ausgibt.
Die statische Methode _println()_ auf dem öffentlich zugänglichen _Feld_ der Klasse _System_ dient dazu Text auf der Konsole auszugeben. Das Statement wird mit einem Semikolon abgeschlossen.

---

## Variablen

#### Namensgebung
Variablen dienen dazu Werte aufzunehmen. Je nach _Scope_ leben diese Variablen unterschiedlich lang. Zur Benennung von Variablen gibt es vier Regeln:
* Variablennamen beginnen mit einem Kleinbuchstaben
* Ein Variablenname darf die Buchstaben A-Z und a-z enthalten
* Ein Variablenname darf beliebige Zahlen von 0-9 enthalten
* Ein Variablenname darf die Sonderzeichen $ und _ enthalten

#### Best Practices
Der Name einer Variable sollte so gewählt werden, dass klar ist, welcher Wert darin gespeichert wird. Als Beispiel wählen wir den Namen _sum_ für eine Variable, welche das Resultat einer Addition enthält.

#### Deklaration
Unter der Deklaration einer Variable versteht man das erste "Erwähnen" einer Variable. In einer statisch typisierten Sprache wie Java bedeutet dies, dass der Typ der Variable festgelegt wird. Der Wert selbst muss bei der Deklaration je nach _Scope_ nicht festgelegt werden. Zur Laufzeit wird für die Variable ein Bereich im Arbeitsspeicher reserviert. Hier werden später Werte, die der Variablen zugewiesen werden, gespeichert. Die Größe des Speicherbereichs hängt vom Typ der Variable ab.

Formal gilt:
```
<variable type> <variable identifier>;
```
Wir geben also den Datentyp und den Namen der Variable an.

#### Initialisierung
Unter dem Begriff Initialisierung wird die direkte Zuweisen eines Wertes bei der Deklaration einer Variablen verstanden.
Lokale Variablen (Variablen, die lediglich innerhalb einer Methode gültig sind) müssen initialisiert werden, bevor sie verwendet werden können.

Beispiel:
```
public static void main(String[] args) {
	int firstSummand = 2;
	int secondSummand;
	int sum = firstSummand + secondSummand;
}
```
Die Variable **secondSummand** wurde nicht initialisiert. Die Zuweisung **int sum = firstSummand + secondSummand** wird also nicht funktionieren.

#### Deklaration mit Initialisierung
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

---

## Datentypen
In Java sind Variablen stark typisiert. Das heisst, dass alle Variablen bei ihrer Erstellung mit einem Datentyp versehen werden müssen.
Seit Java 10 gibt es Typinferenz für lokale Variablen, das heisst, eine lokale Variable kann deklariert und initialisiert werden (muss gleichzeitig geschehen), ohne dass ein Datentyp angegeben werden muss - anstelle des Datentyps kann _var_ verwendet werden:
```
var sum = 20;
```
Es gibt zwei Arten von Datentypen: Primitive Datentypen und Referenztypen. Der grundlegende Unterschied besteht darin, dass eine primitive Variable den tatsächlichen Wert speichert, während eine Referenzvariable die Adresse des Objekts speichert, auf welches sie sich bezieht. Dies hat mit dem Java Memory Modell zu tun. Das nachfolgende Bild zeigt das Java Memory Modell als einfache Darstellung, es besteht grundsätzlich aus dem Stack Memory und dem Heap Space. Primitive Datentypen werden nur auf dem Stack angelegt. Objekte, wie das im Bild gezeigte Auto (Car), sind im Heap abgelegt. Die Referenz auf das Objekt wird auf dem Stack angelegt. Die Referenz "zeigt" also auf das Objekt im Heap.

![Datentypen](../java-grundlagen/datentypen.png "Datentypen")

Dieser fundamentale Unterschied ist relevant beim Vergleich von Werten und Referenzen. Der Operator für den Vergleich ==, vergleicht stets die Werte auf dem Stack miteinander. Bei Referenzen wird dort also überprüft, ob sie auf dasselbe Objekt zeigen. Wenn der Inhalt von Objekten verglichen werden soll, so muss dies mit der Methode _equals_ gemacht werden.

---

### Primitive Datentypen

#### Integraler Datentyp
Integrale Datentypen sind immer ganze Zahlen, sie besitzen also keine Nachkommastellen.
Die folgenden Datentypen speichern ganzzahlige Werte, sie unterscheiden sich nur in ihrer Grösse:
| Datentyp | Speicherbedarf | Bereich |
| --- | --- | --- |
| byte | 8 Bit | -128 ... 127 |
| short | 16 Bit | -32768 ... 32767 |
| int | 32 Bit | -2 147 483 648 ... 2 147 483 647 (-2^31 ...  2^31-1) |
| long | 64 Bit | -2^63 ... 2^63-1 |

In den Werten von integralen Datentypen sind Underscores erlaubt, um die Lesbarkeit zu erhöhen (1_000_000).

Beispiele:
```
int count = 0;
int million = 1_000_000;
```

#### Gleitkomma-Datentyp
Gleitkomma-Datentypen speichern wie der Name bereits sagt, Zahlen mit Nachkommastellen. Diese Zahlen besitzen nur eine bestimmte Genauigkeit, sie dürfen also nicht als unendlich genau betrachtet werden.
Die folgenden Datentypen speichern Zahlen mit Nachkommastellen, sie unterscheiden sich in ihrer Grösse und der Art und Weise wie sie innerhalb von Java abgelegt werden:
| Datentyp | Speicherbedarf | Bereich | Interne Ablage |
| --- | --- | --- | --- |
| float | 32 Bit | +/-1,4E-45 ... +/-3,4E+38 | Dezimalbruch |
| double | 64 Bit | +/-4,9E-324 ... +/-1,7E+308 | Gleitkommazahl |

Beispiele:
```
float radius = 8.5f;
double area = 16.48739d;
```

Trotz Nachkommastellen dürfen Fliesskommzahlen des Typs float niemals zur Berechnung von Währungen verwendet werden. Innerhalb von Java wird ein float stets als Dezimalbruch geführt und die Ungenauigkeit verunmöglicht es diesen Datentyp für Währungsrechnungen zu verwenden.

#### Zeichen-Datentyp

Ein **char** ist ein (vorzeichenloser) 16-Bit-Integer-Datentyp, der ein einzelnes Zeichen darstellt. Dieser Datentyp erlaubt die Repräsentation von Zeichen im so genannten Unicode-Zeichensatz.

Ein einzelnes Zeichen kann eine Ziffer, einen Buchstaben oder ein anderes Symbol sein. Um ein Zeichen zu schreiben, verwenden wir einfache Anführungszeichen wie folgt:
```
'A', 'B', 'C', 'x', 'y', 'z', '0', '1', '2', '9'
```

Zeichenliterale können Symbole eines Alphabets, Ziffern von '0' bis '9', Whitespaces (' ') oder andere Zeichen oder Symbole ('$') darstellen. Verwechsle nicht die Zeichen, die Zahlen ('9') darstellen mit den Zahlen selbst (9).
Ein Zeichen kann nicht zwei und mehr Ziffern oder Buchstaben enthalten, da es nur ein einziges Symbol darstellt.

Wir können Zeichen auf verschiedene Arten initialisieren:
| Einfache Anführungszeichen | ```char A = 'A';``` |
| --- | --- |
| Wir können ein Char-Literal als Integral-Literal angeben, das den Unicode-Wert des Zeichens darstellt, und Integral-Literale können entweder in Dezimal-, Oktal- oder Hexadezimalform angegeben werden.Der zulässige Bereich liegt zwischen 0 und 65535. | ```char A = 65;``` |
| In der Unicode-Darstellung ```'\\uxxxx'``` können Zeichenliterale angegeben werden. Hier steht xxxx für 4 Hexadezimalzahlen. | ```char A = '\u0041';``` |

Beispiele:
```
char letter = 'a';
char point = '.';
letter++; // 'b'
```

##### _Don’t get confused:_
* 123 ist ein Integer, "123" ist ein String;
* 'A' ein Zeichen (char), "A" ist ein String;
* '1' ist ein Zeichen (char), 1 ist ein Integer;

#### Logischer Datentyp
Dieser Datentyp bezieht sich nur auf die zwei Werte _true_ und _false_.
```
boolean done = false;
boolean isBigger = true;
```

---

### Referenztypen
Nebst primitiven Datentypen gibt es Referenzdatentypen. Eine Variable diesen Typs enthält nicht die Werte selbst wie eine Variable primitiven Typs, sondern nur einen Verweis (Referenz) auf den  
Speicherort der Daten. Der Standardwert von Referenzvariablen ist null, welcher besagt, dass die Variable auf kein Objekt verweist.

Es gibt zwei Unterarten von Referenztypen:
1. Array: Eine Datenstruktur fester Grösse, die dazu dient, mehrere Elemente gleichen Typs zu speichern
2. Objektdatentyp, repräsentiert ein beliebiges Objekt

---

#### Arrays

##### Definition
Häufig benötigen Software-Entwickler mehrere zusammengehörige Variablen desselben Datentyps, die logisch oder verwaltungstechnisch zusammengehören. Es wäre aber sehr aufwendig, diese Variablen alle einzeln zu deklarieren und zu verarbeiten. Zudem ist es möglich, dass die Anzahl an Objekten noch unbekannt ist und erst bei der Ausführung des Programms definiert wird. Deswegen wird in Java, wie in anderen Programmiersprachen auch, die Verwendung von Arrays unterstützt. In Arrays lassen sich beliebige primitiven Datentypen und Objekte speichern und systematisch bearbeiten. Alle Variablen haben einen gemeinsamen Namen, werden aber über unterschiedliche Indizes angesprochen.

##### Deklaration
Die Deklaration eines Arrays enthält folgende Bestandteile:
| Reihenfolge | W   |     |
| --- | --- | --- |
| 1. | Typ | ```String, int, double, char, ...``` |
| 2. | Eckige Klammern | ```[]``` |
| 3. | Bezeichner / Namen | ```words, numbers, values, letters...``` |

```
String[] words;
```

##### Länge eines Arrays
Die Anzahl der Elemente in einem Array wird als Länge eines Arrays bezeichnet. Diese Länge wird zum Zeitpunkt der Erstellung eines Arrays einmal festgelegt. Sie kann später in einem Programm nur durch Definition eines neuen Arrays und dem Kopieren von Werten geändert werden.

Wir können die Länge eines Arrays mithilfe einer in Java integrierten Funktionalität überprüfen:
```
words.length
```

##### Indizierung
Die Indizes in einem Array reichen immer von 0 bis length-1. Ein Array mit den ersten 100 natürlichen Zahlen hat beispielsweise eine Länge von 100 und Indizes von 0 bis 99.

##### Syntax
In Java müssen wir zum Zeitpunkt der Deklaration eines Arrays folgendes angeben:
* den Datentyp
* den Namen

und zum Zeitpunkt der Initialisierung:
* die Größe

Syntaktisch können wir ein Array eines ganzzahligen Datentyps auf folgende Weise deklarieren:
```
String[] words;
String words[];
```
Die zweite Form wird bei uns nicht verwendet.

Dieser Code deklariert die Variable _words_, erstellt das Array-Objekt jedoch noch nicht. Der Operator _new_ wird in Java zum Erstellen von neuen Objekten verwendet.
```
String[] words = new String[5];
```
Damit wird ein Array-Objekt der Länge 5 instanziiert. Die fünf Elemente dieses Arrays wurden mit Standardwerten initialisiert. Bei einem Array des Datentyps String ist der Default-Wert null. Alle Werte im Array werden also mit null aufgefüllt.

Wir können auch direkt die Werte der Array-Elemente angeben:
```
String[] words = { "Hai", "Oktopus", "Rochen", "Wal", "Fisch" };
```
Es wird also ein Array mit der Grösse 5 und den angegebenen Werten erstellt.

##### Zugriff auf Elemente
Wenn wir den Wert eines Elements in unserem Array verändern möchten, geschieht dies folgendermaßen:
```
words[index] = value;
```

Wenn wir den Wert eines Array-Elements in einer Variablen außerhalb des Arrays speichern wollen:
```
String value = words[index];
```

---

#### String
Eine Variable, die eine Zeichenkette enthält, hat den Typ String.
```
String hello = "Hello, Java";
```

Diese Zeichenkette besteht aus 11 Zeichen, einschließlich eines Leerzeichens. Wie wir hier ebenfalls sehen, müssen String-Literale von doppelten Anführungszeichen umgeben sein. Ein Objekt des Typs String ist unveränderlich, die Werte innerhalb eines Strings können also nach dessen Erstellung nicht mehr verändert werden.

##### Methoden
Der folgende Code zeigt die Verwendung einiger Methoden der Klasse String. Alle Methoden sind in der API unter https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html zu finden.
```
public class StringMethoden {
    public static void main(String\[\] args) {
        String house = "house";

        /**
         * Returns the char value at the specified index (indexing starts from 0)
         */
        char o = house.charAt(1);

        /**
         * Returns the length of this string.
         */
        int length = house.length();

        /**
         * Returns true if and only if this string contains the specified sequence of char values
         */
        boolean isContaining = house.contains("us");

        /**
         * Returns the index within this string of the first occurrence of the specified character
         */
        int indexChar = house.indexOf('s');

        /**
         * Returns the index within this string of the first occurrence of the specified substring
         */
        int indexSubstring = house.indexOf("us");

        /**
         * Tests if this string starts with the specified prefix
         */
        boolean startsWithPrefix = house.startsWith("Ho"); // false
        boolean startsWithPrefix2 = house.startsWith("ho"); // true

        /**
         * Tests if this string ends with the specified suffix
         */
        boolean endsWithSuffix = house.endsWith("se"); // true

        /**
         * Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar
         */
        String mouse = house.replace('h', 'm');
        String houseHouse = "House, House";
        String mouseMouse = houseHouse.replace('H', 'M');

        /**
         * Returns a new string that is a substring of this string, starting from the specified index
         */
        String applePearLemon = "Apple, pear, lemon";
        String pearLemon = applePearLemon.substring(7);

        /**
         * Returns a new string that is a substring of this string
         */
        String pear = applePearLemon.substring(7, 11);

        /**
         * Converts all of the characters in this String to upper case
         */
        String apple = "Apple";
        String appleUpperCase = apple.toUpperCase(); // APPLE

        /**
         * Converts all of the characters in this String to lower case.
         */
        String appleLowerCase = apple.toLowerCase(); // apple

        /**
         * Splits this string around matches of the given regular expression, puts them in a String array
         */
        String applePear = "Apple, pear";
        String[] fruits = applePear.split(",\\s"); // \\s means whitespace

        /**
         * Converts this string to a new character array
         */
        char[] charArray = applePearLemon.toCharArray();

        /**
         * Compares this string to the specified object
         */
        String appleOne = "Apple";
        String appleTwo = "Apple";
        boolean isEqual = appleOne.equals(appleTwo);

        /**
         * Compares two strings lexicographically.
         * The comparison is based on the Unicode value of each character in the strings. 
		 * The result is a negative integer if this String object lexicographically precedes the argument string.
		 * The result is a positive integer if this String object lexicographically follows the argument string.
		 * The result is zero if the strings are equal
         */
        String abcd = "abcd";
        String cdef = "cdef";

        if (abcd.compareTo(cdef) < 0) {
            System.out.println(abcd + " precedes " + cdef);
        }

        if (house.compareTo(house) == 0) {
            System.out.println(house + " is equal to " + house);
        }

        if (cdef.compareTo(abcd) > 0) {
            System.out.println(cdef + " follows " + abcd);
        }

        /**
         * Capital letters precede lower case letters
         */
        String houseLowerCase = "house";
        String houseUpperCase = "HOUSE";
        if (houseLowerCase.compareTo(houseUpperCase) > 0) {
            System.out.println(houseUpperCase + " precedes + " houseLowerCase);
        }

        /**
         * Compares two strings lexicographically, ignoring case differences
         */
        System.out.println(houseLowerCase.compareToIgnoreCase(houseUpperCase));
    }
}
```
---

## Scanner

Eine Möglichkeit, Benutzereingaben in Java vorzunehmen, besteht in der Verwendung der Scanner-Klasse, die verwendet wird, indem zuerst die Definition der Klasse wie in Zeile 1 importiert und dann ein Objekt dieser Klasse wie in Zeile 6 erstellt wird.

```
import java.util.Scanner;

public class TakeInput {
    public static void main (String\[\] args) {
	    Scanner scanner = new Scanner(System.in);
		System.out.println("Enter your name: ");
		String name = scanner.nextLine();
		System.out.println("Your name is: " + name);
    }
}
```

**Zeile 1**

Der erste Schritt besteht darin, die Scanner-Klasse zu importieren, damit sie im folgenden Code verwendet werden kann. Die _Java_ Scanner-Klasse stammt aus dem Paket [java.util](https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html).
Es ist einfach zu bedienen, muss jedoch importiert werden, damit die Klasse funktioniert.

**Zeile 6**

* Wir deklarieren den Datentyp als _Scanner_ und geben ihm den Bezeichner _scanner_
* Wir weisen der Variable scanner ein neues Objekt zu, welches den System-Eingabestream enthält ([System.in](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/System.html#in))

**Zeile 8**

* Wir deklarieren eine Variable vom Datentyp String mit dem Bezeichner name
* Wir weisen der Variable name das Resultat der Methode _scanner.nextLine()_ zu
* Diese Methode nimmt die Tastatureingabe vom Benutzer auf der Kommandozeile entgegen. Sie wird beendet, wenn der Benutzer die Enter-Taste drückt

---

## Statische Methoden
Mittlerweile hast du bereits einige statische Methoden kennengelernt, wie zum Beispiel die Main-Methode oder die Methode println() der Klasse System oder die Methode valueOf() der String-Klasse.
Hier wollen wir uns nun genauer anschauen, was statische Methoden sind, denn diese wirst du unter anderem für das Lösen der Übungen benötigen.
Das Keyword _static_ ist ein sehr nützliches Werkzeug in Java. Bei statischen Methoden sind einige wichtige Punkte zu beachten.
* Diese Methoden gehören nicht zu einer Referenz von einem bestimmten Objekt
* Diese Methoden werden über den Klassennamen aufgerufen und nicht über eine Referenz von einem bestimmten Objekt

Wenn also in einem Methodenkopf das Keyword _static_ steht, dann weisst du, dass es sich um eine statische Methode handeln muss.
Schauen wir uns unterschiedliche Methodendeklarationen an (folgendes gilt für statische Methoden wie auch für nicht-statische Methoden):
Wenn eine Methode einen Wert an ihren Aufrufer zurückgeben soll, sprechen wir von einer Methode mit einem _Rückgabewert_:

```
public static returnType methodName() {
    return returnValue; // der Typ des Rückgabewerts muss vom Typ sein, welcher im Methodenkopf steht
}
```
Wir sehen, dass in der Methodendeklaration angeben werden muss, welcher Typ zurückgegeben wird.

Wenn eine Methode keinen Wert zurückgegeben soll, verwenden wir das Keyword _void_:
```
public static void methodName() {
    
}
```
Das Keyword _return_ ist in Methoden ohne Rückgabewert weiterhin zulässig um die Methode zu verlassen. Die Angabe eines Rückgabewerts entfällt in diesem Fall.

Wir können auch Werte einer Methode übergeben – hierbei sprechen wir von _Parametern_.
```
public static void methodName(type identifier) {
    
}
```
Ein Parameter besteht immer aus dem Datentyp und einem Bezeichner. Wir können beliebig viele Parameter an eine Methode übergeben. Gemäss den SBB Code Conventions (Regeln für den Programmcode) sollte eine Methode nicht mehr als acht Parameter haben.

#### Regeln
* Die Reihenfolge der Schlüsselwörter im Methodenkopf darf nicht verändert werden
* Bei der Auswahl des Methodennamens müssen die gleichen Regeln wie bei der Benennung einer Variablen eingehalten werden
* Keine doppelten Methoden: Jede Methodensignatur darf in einer Klasse nur einmal vorkommen

#### Aufruf
Innerhalb der gleichen Klasse
```
methodName();
```
Ausserhalb:
```
ClassName.methodName();
```

---

## Mathematik & Logik

Mathe in Java ist sehr einfach. Beachte, dass mathematische Java-Operationen einer bestimmten Reihenfolge folgen (Punkt-Operationen vor Strich-Operationen)

#### Arithmetische Operatoren
| Symbol | Arithmetische Operation | Beispiel |
| --- | --- | --- |
| + | Addition | ```int sum = 2 + 3;``` |
| - | Subtraktion | ```int difference = 5 – 2;``` |
| / | Division | ```int quotient = 15 / 5;``` |
| * | Multiplikation | ```int product = 3 * 4;``` |
| % | Division mit Rest | ```int remainder = 7 % 3;``` |
| ++ | Post und Prä-Inkrement (1 addieren) | ```count++; // (count = count + 1)``` |
| - - | Post und Prä-Dekrement (1 subtrahieren) | ```count--; // (count = count – 1)``` |

#### Post- und Prä-Inkrement
Das Inkrementieren und Dekrementieren von Variablen ist eine sehr häufige Operation.
Von diesem Operator gibt es zwei Varianten:
* Er kann vor der Variable stehen, wie in ```++i``` (Präfix-Schreibweise) oder
* dahinter, wie bei ```i++``` (Postfix-Schreibweise)

Der Präfix-Operator verändert die Variable vor der Auswertung der Programmzeile, und der Postfix-Operator ändert sie nach der Auswertung der Programmzeile. Mit anderen Worten: Nutzen wir einen Präfix-Operator, so wird die Variable erst herauf- bzw. heruntergesetzt und dann der Wert geliefert. Und beim Post-Operator ist es genau umgekehrt.

#### Postinkrement
```
int i = 5;
int c = i++; // c = 5
// ab hier ist i = 6
```

#### Präinkrement
```
int i = 5;
int d = ++i; // d = 6
```

#### Postdekrement
```
int i = 5;
int e = i--; // e = 5
// ab hier ist i = 4
```

#### Prädekrement
```
int i = 5;
int f = --i; // f = 4
```

---

#### Vegleichsoperatoren
Die Ergebnisse dieser Operationen sind stets Boolean-Werte.
| Symbol | Vergleich | Beispiel |
| --- | --- | --- |
| >  | grösser als | 5 > 4 |
| <  | kleiner als | 4 < 5 |
| >= | grösser gleich | 3 >= 3 |
| <= | kleiner gleich | 3 <= 3 |
| == | gleich | 2 == 2 |
| != | ungleich | 2 != 4 |

#### Boolsche Operatoren
Diese Operatoren basieren auf der boolschen Algebra. Daher arbeiten boolsche Operatoren direkt mit boolschen Werten. Es gibt vier Arten von boolschen Operatoren. Schauen wir uns zunächst ihre Symbole und deren Inhalt in der folgenden Tabelle an, bevor wir erläutern, welche Funktionen sie ausführen.
| Symbol | Boolsche Operation | Erklärung |
| --- | --- | --- |
| && | Logisches UND (AND) | _AND_ gibt nur dann true zurück, wenn die Ausdrücke auf beiden Seiten des Operators true sind (Hinweis: Dieser Ausdruck wird _lazy_ evaluiert. Dies bedeuetet, wenn der erste Ausdruck _false_ ist, wird der zweite Ausdruck nicht mehr ausgewertet |
| \|\| | Logisches ODER (OR) | _OR_ gibt true zurück, wenn der Ausdruck auf einer oder beiden Seiten des Operators true ist (Hinweis: Dieser Ausdruck wird _lazy_ evaluiert. Dies bedeuetet, wenn der erste Ausdruck _true_ ist, wird der zweite Ausdruck nicht mehr ausgewertet |
| ! | Logisches NICHT (NOT) | _NOT_ kehrt den Wert des darauffolgenden booleschen Ausdrucks um. Aus _true_ wird also _false_ und umgekehrt |
| ^ | Logisches ENTWEDER-ODER (XOR) | _XOR_ gibt true zurück, wenn die beiden Ausdrücke unterschiedlich sind |
| & | Logisches UND (AND) | Im Unterschied zum obigen _AND_ wertet dieses immer beide Ausdrücke aus |
| \|  | Logisches ODER (OR) | Im Unterschied zum obigen _OR_ wertet dieses immer beide Ausdrücke aus. |

---

## Kontrollstrukturen
Kontrollstrukturen dienen dazu, den Ablauf eines Programms zu steuern.
Damit bietet eine Kontrollstruktur die Möglichkeit, Programmteile nur unter gewissen Bedingungen ( → bedingte Anweisungen) auszuführen oder Programmteile zu wiederholen ( → Schleifen).

#### Bedingte Anweisungen
Eine bedingte Anweisung ist eine Konstruktion, mit der ein Programm abhängig vom Wert eines boolschen Ausdrucks (true oder false) unterschiedliche Wege geht.

##### If-Statement
Die einfachste Form der bedingten Anweisung besteht aus dem Schlüsselwort if, einem boolschen Ausdruck und einem Block.
```
if (expression) {
    
}
```
Wenn der Ausdruck true ist, werden die Anweisungen im Codeblock ausgeführt. Andernfalls werden sie übersprungen.

##### If-Else Statement
Der obige if-Fall kann mit dem Schlüsselwort else erweitert werden, um alternative Aktionen auszuführen, wenn der Ausdruck false ist.
```
if (expression) {
    // do something
} else {
    // do something else
}
```

Im folgenden Beispiel gibt das Programm je nach Wert von num (gerade oder ungerade) unterschiedlichen Text aus.
```
int num = ...; 	// the num is initialized by some value
if (num % 2 == 0) {
    System.out.println("It's an even number");
} else {
    System.out.println("It's an odd number");
}
```
Da eine Zahl nur gerade oder ungerade sein kann, wird nur eine der beiden Ausgaben gemacht.

##### Else-If-Statements
Ein Else-Statement kann durch ein If-Statement erweitert werden.
```
if (expression0) {
    // do something
} else if (expression1) {
    // do something else 1
} else if (expressionN) {
    // do something else N
} else {
    // in all other cases: do this…
}
```
Wenn also der erste Ausdruck false ist, wird der zweite Ausdruck überprüft, usw.

Beispiel:
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

##### Switch-Statement
Die Switch-Anweisung bietet eine Möglichkeit, basierend auf dem Wert einer einzelnen Variablen (kein Ausdruck!) zwischen mehreren Fällen zu wählen. Die Variable kann eine Ganzzahl, ein Zeichen, eine Zeichenfolge oder eine Aufzählung sein.

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
Die Schlüsselwörter switch und case werden hier immer benötigt. Die Schlüsselwörter break und default sind optional. Das Schlüsselwort break verlässt die Switch-Anweisung.
Wenn ein Fall nicht über das Keyword _break_ verfügt, wird auch der darauffolgende Fall ausgewertet. Dies ist spannend, um die einzelnen Auswertungen verketten zu können. Der Default-Fall wird ausgewertet, wenn kein Fall mit dem Variablenwert übereinstimmt.

#### Schleifen (Loops)
Manchmal müssen wir einen Codeblock für eine bestimmte Anzahl wiederholen. Zu diesem Zweck stellt Java die Schleife bereit. Diese Schleife wird häufig verwendet, um über einen Wertebereich oder durch ein Array zu iterieren. For-Loops arbeiten mit einem Schleifenzähler, welcher sehr gut für Indizes von Arrays verwendet werden kann. Bei allen Schleifen ist Vorsicht geboten, da es rasch zu einer unendlichen Anzahl von Ausführungen kommen kann.

##### For-Loop
```
for (initialization; condition; modification) {
    // do something
}
```
* Bevor die Schleife beginnt, wird einmal die Initialisierungsanweisung (initialization) ausgeführt. Wir bezeichnen diese Variable als Schleifenvariable. Es sind mehrere Schleifenvariablen erlaubt, sie können durch Kommas getrennt werden.
* Die Bedingung (condition) ist ein boolscher Ausdruck, der die Notwendigkeit der nächsten Iteration bestimmt. Wenn die Auswertung der Bedingung false ist, wird die Schleife beendet – ansonsten folgt eine weitere Iteration
* Die Modifikation ist eine Anweisung, die den Wert der Schleifenvariablen verändert. Sie wird nach jeder Iteration aufgerufen. Normalerweise wird der Wert der Variable inkrementiert oder dekrementiert.

Beispiel:
```
int n = 9;
for (int i = 0; i <= n; i++) {
    System.out.print(i + " ");
}
// Output: 0 1 2 3 4 5 6 7 8 9
```

Innerhalb des Schleifenkörpers kann das Programm wiederum alle möglichen Java-Anweisungen ausführen. Es kann sogar andere Schleifen enthalten. Wie bei allen Blöcken sind die Schleifenvariablen nur innerhalb des Schleifenkörpers sichtbar.
Die Schleifenvariable wird meistens mit einfachen Variablennamen wie i, j, k oder index benannt.

Hier ist ein weiteres Beispiel. Berechnen wir die Summe der Ganzzahlen von 1 bis 10 mit der for-Schleife.
```
int startIncl = 1;
int endExcl = 11;
int sum = 0;

for (int i = startIncl; i < endExcl; i++) {
    sum += i;
}

System.out.println(sum); // Output: 55
```

##### For-Each Loop
Der For-Each-Loop durchläuft alle Elemente eines Arrays oder einer Collection. Die Angaben aus dem For-Loop werden durch eine Schleifenvariable und ein Doppelpunkt ersetzt.
```
int[] numbers = { 125, 381, 98, 12, 235 };
for (int number: numbers) {
    System.out.print(number + " ");
}
// Output: 125 381 98 12 235
```
Der gezeigte Loop wird also fünfmal ausgeführt und der Wert der Variable _number_ nimmt bei jedem Durchlauf den jeweils nächsten Wert aus dem Array an.

##### While-Loop
Die while- Schleife besteht aus einem Codeblock und einer Bedingung (einem booleschen Ausdruck). Wenn die Bedingung erfüllt ist, wird der Code innerhalb des Blocks ausgeführt. Dieser Code wird solange wiederholt, bis die Bedingung nicht mehr erfüllt ist.
```
while (condition) {
    // body: do something
}
```
Innerhalb des Schleifenkörpers kann das Programm wiederum alle möglichen Java-Anweisungen ausführen. Es kann sogar andere Schleifen enthalten.

Beispiel: Die folgende Schleife gibt Ganzzahlen aus, während eine Variable kleiner als 5 ist.
```
int i = 0;

while (i < 5) {
    System.out.print(i + " ");
    i++;
}
// Output: 0 1 2 3 4
```

##### Do-While Loop
Die Do-While-Schleife besteht aus einem Codeblock und einer Bedingung (einem boolschen Ausdruck) am Ende. Im Gegensatz zur While-Schleife wird die Do-While-Schleife mindestens einmal ausgeführt, da die Bedingung am Ende steht.
```
do {
    // body: do something
} while (condition);
```