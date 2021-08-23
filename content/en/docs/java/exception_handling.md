---
title: "Exception Handling"
linkTitle: "Exception Handling"
weight: 3
description: >
  Exception Handling
---

#### Ziele
* Ich kenne die Schlüsselwörter try, catch, finally, throw und throws
* Ich weiss was "Unchecked" und "Checked" Exceptions sind
* Ich kann auftretende Exceptions abhandeln
* Ich kann eigene Exceptions definieren und anwenden
* Ich kenne Multicatch und Try-With-Resources und kann die beiden Konstrukte anwenden
* Ich kenne die beiden Interfaces AutoCloseable und Closeable

#### Änderungskontrolle
| Autor | Version | Datum | Änderungen |
| --- | --- | --- | --- |  
| Claudio Zesiger | 0.1 | 01.09.2020 | * Initiale Version erstellt |
| Claudio Zesiger | 0.2 | 21.10.2020 | * Initiale Version abgeschlossen |

#### Voraussetzungen
* Gute Grundlagenkenntnisse von Java-Anwendungen

---

## Theorie / Einleitung

---

In jeder Applikation kann es zu erwarteten oder unerwarteten Fehlern kommen. In Java werden diese Fehler durch den Bereich Exception Handling abgedeckt. Im Exception Handling gilt es, durch gezieltes Abhandeln von auftretenden Exceptions, Abstürze der Anwendung zu verhindern. Jeder Software-Entwickler muss sich bewusst sein, dass nicht behandelte Exceptions eine Anwendung jederzeit beenden können. Ebenfalls schlimme Auswirkungen in Form von "Memory Leaks" haben nicht geschlossene Streams.

Innerhalb des Java Exception Handling unterscheiden wir zwei Arten von Exceptions:
* Unchecked Exceptions
* Checked Exceptions

Unchecked Exceptions sind Laufzeitfehler und werden durch den Compiler nicht erkannt. Bei der Implementation werden diese Fehler häufig übersehen. Der häufigste Laufzeitfehler ist die NullPointerException. Diese kann erst zur Laufzeit auftreten, da nur zur Laufzeit Objekte erzeugt werden und damit eine Referenz überhaupt null sein kann. Die einzige Möglichkeit Laufzeitfehler abzuhandeln ist "Safe Programming". Während der Implementation prüfen wir also beispielsweise, ob eine Referenz nicht null ist bevor wir darauf zugreifen.

Checked Exceptions hingegen werden durch den Compiler erkannt und müssen zum Zeitpunkt der Kompilierung entweder am Ort des Auftretens abgehandelt werden oder sie werden an das Objekt weitergereicht, welches die entsprechende Methode aufgerufen hat. Damit wird auch die Verantwortung die Exception abzuhandeln an den Aufrufer weitergegeben.

Dazu ein kleines Beispiel:
```
public static void main(String\[\] args) {
	PhoneBook phoneBook = new PhoneBook();
	Person person = phoneBook.findByPhoneNumber("079 654 32 10");
	System.out.println(person.getName());
}
```

Ohne die Implementation der Methode findByPhoneNumber zu kennen, muss ein Software-Entwickler an dieser Stelle das zurückgelieferte Objekt vom Typ Person zuerst auf null prüfen.
Schauen wir uns also die Implementation dieser Methode etwas genauer an:
```
public class PhoneBook {
	private List<Person> entries = new ArrayList<>();

	public Person findByPhoneNumber(String number) {
		for (Person p: this.entries) {
			if (p.getPhoneNumber().equals(number)) {
				return p;
			}
		}
		return null;
	}
}
```

Wie (vielleicht) erwartet liefert die Methode null zurück, falls kein Eintrag mit der gesuchten Nummer gefunden wird. Dies führt in der Main-Methode im Codeblock oben auf der letzten Zeile zu einer NullPointerException, da die Referenz der Person auf null zeigt. Abhilfe schafft hier ein einfaches If-Statement.

 ```
public static void main(String\[\] args) {
	AddressBook addressBook = new AddressBook();
	Person person = addressBook.findByPhoneNumber("079 654 32 10");
	if (person != null) {
		System.out.println(person.getName());
	}
}
```

Der Laufzeitfehler kann nun nicht mehr auftreten. Es stellt sich nun die Frage, ob wir mit dieser Lösung zufrieden sein können. Im Prinzip müssten wir zumindest noch ein Else-Statement ergänzen, damit wir informiert werden wenn keine Person mit dieser Nummer gefunden wird.
```
public static void main(String\[\] args) {
	AddressBook addressBook = new AddressBook();
	Person person = addressBook.findByPhoneNumber("079 654 32 10");
	if (person != null) {
		System.out.println(person.getName());
	} else {
		System.out.println("Es wurde keine Person mit dieser Nummer gefunden!");
	}
}
```

Eine andere Lösung könnte sein das Null-Object Pattern zu verwenden und damit ein gültiges Objekt anstelle von null zurückzuliefern.

---

## try / catch / finally
Um eine Checked Exception abzuhandeln, muss der Block (welcher die Exception erzeugt) innerhalb eines try-Blocks angelegt werden. Der abzuhandelnde Exception-Typ wird dabei in den catch-Block geschrieben.

```
try {
	// Code, welcher eine IOException werfen könnte
} catch (IOException e) {
	// Code für die Abhandlung der IOException
}
```

Ein solches Statement kann beliebig viele catch-Blöcke aufweisen

```
try {
	int[] array = new int[2];
	array[3] = 30 / 0;
} catch (ArithmeticException e) {
	// Code für die Abhandlung der ArithmeticException
} catch (ArrayIndexOutOfBoundsException e) {
	// Code für die Abhandlung der ArrayIndexOutOfBoundsException
}
```

Bei mehreren catch-Blöcken muss die spezifischste Exception stets zuoberst stehen. Je weiter unten der catch-Block steht, desto genereller wird die Exception, die abgefangen werden soll. Der Grund dafür ist, dass alle Checked Exceptions von der Klasse Exception abgeleitet sind.  
Steht eine allgemeinere Exception weiter oben, so wird der catch-Block der spezifischeren Exception weiter unten nicht mehr erreichbar.

An jeden try-Block (ob mit oder ohne catch-Block) kann zusätzlich ein finally-Block angehängt werden. Dieser Block wird nach der Abhandlung der Exception ausgeführt.

```
try {
	// Code, welcher eine IOException werfen könnte
} catch (IOException e) {
	// Code für die Abhandlung der IOException
} finally {
	// Code, welcher nach der Abhandlung der Exception ausgeführt werden soll
}
```

Wie oben erwähnt, kann der catch-Block weggelassen werden:

```
try {
	// Code, welcher eine beliebige Exception werfen könnte
} finally {
	// Code, welcher nach der Abhandlung der Exception ausgeführt werden soll
}
```

Vorsicht ist geboten bei return-Anweisungen innerhalb von catch- oder finally-Blöcken. Da der finally-Block immer zuletzt ausgeführt wird, ist das Statement in diesem Block auch massgebend für die Funktionalität.

---

## throw / throws
Wie bereits weiter oben erwähnt, muss eine Exception nicht immer dort abgehandelt werden wo sie gerade auftreten kann. Wenn sich der Entwickler also entscheidet die Abhandlung in andere Klassen zu verlagern, so kann er mit dem Schlüsselwort throws angeben, dass die aufrufende Komponente die Exception abhandeln muss.

Dazu ein kurzes Beispiel:
```
public class EntryForbiddenException extends Exception {
	
}
```

```
public class Saloon {
	public void checkAge(int age) throws EntryForbiddenException {
		if (age < 18) {
			throw new EntryForbiddenException();
		}
		// ...
	}
}
```

```
public class Main {
	public static void main(String\[\] args) {
		Saloon saloon = new Saloon();
		try {
			saloon.checkAge(15);
		} catch (EntryForbiddenException e) {
			// ...
		}
	}
}
```

Wie wir sehen, wird die Abhandlung in die Main-Methode verlagert. Die Weitergabe von Exceptions kann über beliebig viele Stufen erfolgen. Wird die Exception jedoch von der "obersten" Stufe (in diesem Fall die Main-Methode) nicht abgehandelt, so wird die Anwendung mit der entsprechenden Exception beendet. Dies passiert, weil niemand die Exception abgehandelt hat.

---

## Umwandlung Laufzeitfehler in Checked Exception
Mit der Lösung aus dem Beispiel weiter oben können wir nicht wirklich zufrieden sein. Anstatt den Rückgabewert der Methode findByPhoneNumber auf null zu prüfen, wählen wir nun einen anderen Ansatz: Wir erweitern die Anwendung, so dass die Methode als Rückgabewert keine null-Werte mehr liefert. Da wir aber durch den Compiler gezwungen werden einen Rückgabewert zu definieren, bleibt uns nur noch die Möglichkeit übrig eine Exception zu werfen.
Zu diesem Zweck definieren wir zuerst einmal eine entsprechende Exception:
```
public class PersonNotFoundException extends Exception {
	
}
```

Diese Exception wird nun an der entsprechenden Stelle im Sourcecode geworfen. Die Methode erhält zudem noch eine Erweiterung mit dem Schlüsselwort throws.

```
public class PhoneBook {
	private List<Person> entries = new ArrayList<>();

	public Person findByPhoneNumber(String number) throws PersonNotFoundException {
		for (Person p: this.entries) {
			if (p.getPhoneNumber().equals(number)) {
				return p;
			}
		}
		throw new PersonNotFoundException();
	}
}
```

Beim Aufruf der Methode sind wir nun gezwungen, die Exception abzuhandeln.

```
public static void main(String[] args) {
	AddressBook addressBook = new AddressBook();
	try {
		Person person = addressBook.findByPhoneNumber("079 654 32 10");	
		System.out.println(person.getName());
	} catch (PersonNotFoundException e) {
		System.out.println("Es wurde keine Person mit dieser Nummer gefunden!");
	}
}
```

Aus dem ursprünglichen Laufzeitfehler ist nun eine abgehandelte Exception geworden. Die Implementation vermeidet wo immer möglich die Rückgabe von null-Werten.

---

## Multi-Catch

Seit Java 7 gibt es die Möglichkeit für einen sogenannten Multi-Catch.

Schauen wir uns das folgende Beispiel an:

### Ohne Multi-Catch
```
public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    try {
        int n = Integer.parseInt(scn.nextLine());
        if (99%n == 0) {
            System.out.println(n + " is a factor of 99");
        }
    } catch (ArithmeticException ex) {
        System.out.println("Arithmetic Exception " + ex);
    } catch (NumberFormatException ex) {
        System.out.println("Number Format Exception " + ex);
    }
}
```

### Mit Multi-Catch
```
public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    try {
        int n = Integer.parseInt(scn.nextLine());
        if (99%n == 0) {
            System.out.println(n + " is a factor of 99");
        }
    } catch (ArithmeticException | NumberFormatException ex) {
        System.out.println("Exception " + ex);
    }
}
```

Die beiden Exceptions werden in einem catch-Block zusammengefasst.
Die Exceptions innerhalb eines Multi-Catch dürfen nicht in einer Vererbungsbeziehung zueinander stehen. Der Basistyp muss also unterschiedlich sein.

---

## Try-With-Resources
Ebenfalls seit Java 7 gibt es die Möglichkeiten für automatisches Ressourcen-Management.
Betrachten wir dazu zuerst ein Beispiel ohne automatisches Ressourcen-Management:
```
public static String readFirstLine(String path) {
	BufferedReader br = null;
	try {
		br = new BufferedReader(new FileReader(path));
		return br.readLine();
	} catch (IOException e) {
		// handle or rethrow
	} finally {
		try {
			if (br != null) {
				br.close();
			}
		} catch (IOException e) {
			// ignore
		}
	}
	return "";
}
```

Der finally-Block ist notwendig, um die verwendete Ressource des Buffered-Readers zu schliessen. Da beim Schliessen aber eine IOException auftreten kann benötigen wir innerhalb des finally-Blocks einen zusätzlichen try-catch-Block.

Betrachten wir nun das gleiche Beispiel mit automatischem Ressourcen-Management:
```
public static String readFirstLine(String path) { 
	try (FileReader fr = new FileReader(path); BufferedReader br = new BufferedReader(fr)) {
		return br.readLine();
	} catch (IOException e) {
		// handle or rethrow
	}
	return "";
}
```

Wie wir sehen fällt der finally-Block zum Schliessen der Ressourcen komplett weg. Die beiden Ressourcen FileReader und BufferedReader werden automatisch geschlossen. Dies geschieht im Hintergrund über die Methode close, welche vom Interface AutoCloseable zur Verfügung gestellt wird. In einem try-with-resources Statement dürfen also nur Objekte vorliegen, welches das genannte Interface implementieren. Das Closeable-Interface mit der gleichen Funktion stellt dabei die Abwärtskompatibilität zu älteren Java-Versionen sicher. Grundsätzlich soll das Closeable-Interface für IO Streams verwendet werden, da es mit IOExceptions arbeitet.

Das Schliessen der Ressourcen hat stets die Reihenfolge von hinten nach vorne. In unserem Beispiel wird also zuerst der BufferedReader geschlossen und danach der FileReader. Die Verkettung von Ressourcen innerhalb eines try-with-resources Statements ist zu vermeiden. Besser sind separate Deklarationen wie oben gezeigt.
