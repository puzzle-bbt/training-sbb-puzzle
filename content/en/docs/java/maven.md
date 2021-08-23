---
title: "Maven und Continuous Integration"
linkTitle: "Maven"
weight: 2
description: >
  Maven Continuous Integration
---

#### Ziele
* Ich kenne die Grundlagen von Maven
* Ich kann Maven lokal konfigurieren
* Ich kann im Artifactory Abhängigkeiten suchen und diese verwenden
* Ich kenne die Grundlagen von Project Object Models (pom)
* Ich kenne die wichtigsten Maven Befehle und kann diese auf der Kommandozeile anwenden
* Ich kann die Abhängigkeiten meiner Applikationen mit Maven verwalten
* Ich kann Maven Plugins konfigurieren und damit meinen Maven-Build steuern
* Ich kann den Begriff Continuous Integration erklären
* Ich kenne die Komponenten der Deployment-Pipeline und deren Aufgaben

#### Änderungskontrolle
| Autor | Version | Datum | Änderungen |
| --- | --- | --- | --- |  
| Claudio Zesiger | 0.1 | Mai 2020 | Initiale Version erstellt |
| Claudio Zesiger | 0.2 | 27.08.2020 | * Modul erweitert |
| Claudio Zesiger | 0.3 | 14.10.2020 | * Modul erweitert |

#### Voraussetzungen
* Gute Grundlagenkenntnisse von Java-Anwendungen

---

## Maven

### Allgemeine Informationen
Apache Maven ist ein Build-Management Tool. Von einer einzelnen Datei aus, kann Maven den Build eines Projektes steuern. Diese zentrale Datei ist das Project Object Model, kurz auch POM genannt. Der Build eines Projektes kann dabei von einfacher Kompilierung bis zur Auslieferung einer Anwendung auf eine bestimmte Plattform reichen.

Damit Maven funktionieren kann, benötigt ein Projekt die folgenden Dinge:
* Eine Maven-Installation, entweder separat oder Built-In wie beispielsweise in der IntelliJ IDEA
* Eine POM-Datei pro Projekt oder Modul (es handelt sich um eine XML-Datei)
* Ein zentrales Maven-Repository
* Ein lokales Maven-Repository
* Eine Konfigurationsdatei mit dem Namen settings.xml

---

### pom.xml
Der Aufbau eines POM kann grob in folgenden Abschnitte unterteilt werden, hier erklärt an einem umfangreichen Beispiel.

```
<!-- (1) Header -->
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		 xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

	<!-- (2) Angaben zum Artefakt -->
	<groupId>ch.sbb.interviewtool</groupId>
    <artifactId>interviewtool-backend</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

	<!-- (3) Angaben zum Parent-Projekt -->
	<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.4.RELEASE</version>
        <relativePath/>
    </parent>

	<!-- (4) Properties -->
	<properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <java.version>1.8</java.version>
        <maven.build.timestamp.format>yyyy-MM-dd HH:mm</maven.build.timestamp.format>
        <timestamp>${maven.build.timestamp}</timestamp>
        <itext.version>7.1.2</itext.version>
    </properties>

	<!-- (5) Abhängigkeiten -->
	<dependencies>
		<!-- Spring Boot -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web-services</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

		<!-- Spring -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webmvc</artifactId>
        </dependency>

		<!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.6</version>
        </dependency>

		<!-- Datenbank -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.20</version>
        </dependency>

		<!-- iText -->
        <dependency>
            <groupId>com.itextpdf</groupId>
            <artifactId>kernel</artifactId>
            <version>${itext.version}</version>
        </dependency>
        <dependency>
            <groupId>com.itextpdf</groupId>
            <artifactId>io</artifactId>
            <version>${itext.version}</version>
        </dependency>
        <dependency>
            <groupId>com.itextpdf</groupId>
            <artifactId>layout</artifactId>
            <version>${itext.version}</version>
        </dependency>

		<!-- Unit- und Integrationstests -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

	<!-- (6) Build-Informationen -->
	<build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <compilerVersion>1.8</compilerVersion>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

	<!-- (7) Auslieferung -->
	<distributionManagement>
        <repository>
            <id>mvn</id>
            <url>https://bin.sbb.ch/artifactory/cca.mvn/</url>
        </repository>
        <snapshotRepository>
            <id>mvn</id>
            <url>https://bin.sbb.ch/artifactory/cca.mvn/</url>
        </snapshotRepository>
    </distributionManagement>

	<!-- (8) Maven-Repositories -->
    <repositories>
        <repository>
            <id>itext-releases</id>
            <name>iText Repository - releases</name>
            <url>https://repo.itextsupport.com/releases</url>
        </repository>
    </repositories>

	<!-- (9) Entwickler-Informationen -->
	<developers>
		<developer>
            <id>U232509</id>
            <name>Benjamin Schaffner</name>
            <email>benjamin.schaffner@sbb.ch</email>
            <organization>SBB</organization>
            <organizationUrl>https://www.sbb.ch</organizationUrl>
            <roles>
				<role>Product Owner</role>
            </roles>
        </developer>
		<developer>
            <id>U210148</id>
            <name>Claudio Zesiger</name>
            <email>claudio.zesiger@sbb.ch</email>
            <organization>SBB</organization>
            <organizationUrl>https://www.sbb.ch</organizationUrl>
            <roles>
				<role>Software Architect</role>
                <role>Lead Developer</role>
            </roles>
        </developer>
        <developer>
            <id>U233432</id>
            <name>Nikola Milicic</name>
            <email>nikola.milicic@sbb.ch</email>
            <organization>SBB</organization>
            <organizationUrl>https://www.sbb.ch</organizationUrl>
            <roles>
                <role>Backend Developer</role>
            </roles>
        </developer>
		<developer>
            <id>E515732</id>
            <name>Samuel Allen</name>
            <email>samuel_lucas.allen@sbb.ch</email>
            <organization>SBB</organization>
            <organizationUrl>https://www.sbb.ch</organizationUrl>
            <roles>
                <role>Full-Stack Developer</role>
            </roles>
        </developer>
    </developers>
</project>
```

#### Abschnitt 1
Der Header einer POM-Datei bleibt grundsätzlich so wie dargestellt. Die Angaben zum Schema sind dabei optional. Falls andere Schemas verwendet werden, so sind diese hier zu deklarieren.

#### Abschnitt 2
Die Angaben zum Artefakt enthalten die folgenden Informationen:
* Gruppen-ID: Normalerweise eine umgekehrte URL, also beispielsweise ch.sbb.interviewtool. Darin sollte der Projektname enthalten sein
* Artefakt-ID: Der Name des Projekts
* Version: Die momentane Version des Projekts, diese wird später durch Releases verändert
* Paketierung: Angabe, in welcher Form das Artefakt geliefert wird. Der Default ist Java Archive (JAR)

#### Abschnitt 3
Falls das Projekt Teil eines anderen Projektes ist, müssen hier die Artefakt-Angaben des sogenannten Parent-Projekts hinterlegt werden.

#### Abschnitt 4
Die Einstellungen in Maven sind beliebig wählbare Tags. So kann beispielsweise eine bestimmte Einstellung oder eine Version definiert werden.
Beispiel:
```
<special.setting>special</special.setting>
```
Innerhalb der POM-Datei kann dann mit
```
${special.setting}
```
auf die Einstellung und damit auf deren Wert (special) zugegriffen werden.

#### Abschnitt 5
Abhängigkeiten zu Fremdbibliotheken. Diese sollten stets Gruppen-ID, Artefakt-ID und Version enthalten. Der Typ der Abhängigkeit gibt an, um welche Art von Bibliothek es sich handelt. Nicht alle Java-Bibliotheken werden als JAR ausgeliefert.
Mögliche Typen sind hier zu finden: [https://maven.apache.org/ref/3.6.3/maven-core/artifact-handlers.html](https://maven.apache.org/ref/3.6.3/maven-core/artifact-handlers.html)
Vielfach wird auch noch der Scope verwendet, er gibt an in welchem Umfang die Fremdbibliothek miteinbezogen wird.
Mögliche Scopes sind:
* compile - Das ist der Default-Scope. Bibliotheken sind in allen Klassenpfaden verfügbar (Classpath)
* provided - Gleich wie compile, ausser das die Bibliothek zur Laufzeit von einem Container (wie dem JDK) erwartet wird
* runtime - Zeigt an, dass die Bibliothek zur Kompilierung nicht verwendet wird. Zur Laufzeit steht sie dann zur Verfügung
* test - Die Bibliothek steht nur für Tests zur Verfügung
* system - Gleich wie provided, mit der Ausnahme, dass die Bibliothek explizit auf dem System zur Verfügung stehen muss

#### Abschnitt 6
Die Build-Informationen konfigurieren den Ablauf des Maven-Builds. Mit Plugins kann der Build selbst durch spezifische Erweiterungen beliebig angepasst werden.
Es stehen sehr viele Plugins für Maven zur Verfügung, eine Übersicht gibt es hier: [https://maven.apache.org/plugins/index.html](https://maven.apache.org/plugins/index.html)

#### Abschnitt 7
Die Auslieferungs-Sektion bestimmt, wo die Artefakte nach dem Build abgelegt werden sollen.

#### Abschnitt 8
Die Angabe von zusätzlichen Maven-Repositories für den Build ist notwendig, wenn die gewünschten Abhängigkeiten im SBB-Repository nicht verfügbar sind.

#### Abschnitt 9
Die Entwickler-Informationen dienen dazu, an der Entwicklung beteiligte Personen zu identifizieren.

---

### settings.xml
Zur Konfiguration von Maven muss eine Einstellungsdatei angelegt werden. Diese Datei sollte immer settings.xml heissen und sich im Verzeichnis C:\\Users\\<Personalnummer>\\.m2. befinden. Bitte beachten, dass das Verzeichnis mit einem Punkt im Namen beginnt.
Sie sollte folgenden Inhalt aufweisen:
```
<settings
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.1.0 http://maven.apache.org/xsd/settings-1.1.0.xsd"
    xmlns="http://maven.apache.org/SETTINGS/1.1.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <servers>
    <server>
      <id>mvn</id>
      <configuration>
        <httpHeaders>
          <property>
            <name>X-JFrog-Art-Api</name>
            <value>REPOSITORY-KEY</value>
          </property>
        </httpHeaders>
      </configuration>
    </server>
  </servers>
  <mirrors>
    <mirror>
      <mirrorOf>*</mirrorOf>
      <name>mvn</name>
      <url>https://bin.sbb.ch/artifactory/mvn</url>
      <id>mvn</id>
    </mirror>
  </mirrors>
  <proxies>
   <proxy>
      <id>zscaler</id>
      <active>true</active>
      <protocol>https</protocol>
      <host>zscaler.sbb.ch</host>
      <port>10465</port>
      <nonProxyHosts>repo.sbb.ch|bin.sbb.ch</nonProxyHosts>
    </proxy>
  </proxies>
    <profiles>
        <profile>
            <id>properties</id>
            <properties>
                <tycho.disableP2Mirrors>true</tycho.disableP2Mirrors>
            </properties>
        </profile>
        <profile>
            <id>default</id>
            <repositories>
                <repository>
                    <id>mvn</id>
                    <name>central.sbb.releases</name>
                    <url>https://bin.sbb.ch/artifactory/mvn</url>
                    <releases>
                        <enabled>true</enabled>
                        <updatePolicy>never</updatePolicy>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                        <updatePolicy>always</updatePolicy>
                    </snapshots>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>mvn</id>
                    <name>central.sbb.plugins</name>
                    <url>https://bin.sbb.ch/artifactory/mvn</url>
                    <layout>default</layout>
                    <snapshots>
                        <enabled>true</enabled>
                        <updatePolicy>always</updatePolicy>
                    </snapshots>
                    <releases>
                        <enabled>true</enabled>
                        <updatePolicy>never</updatePolicy>
                    </releases>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>
    <activeProfiles>
        <activeProfile>default</activeProfile>
    </activeProfiles>
</settings>
```

Auf Zeile 11 muss der **persönliche** Repository-Schlüssel (REPOSITORY-KEY) eingefügt werden.
Um diesen Schlüssel zu generieren, müssen die folgenden Schritte ausgeführt werden:
| #   | Beschreibung |
| --- | --- |  
| 1   | [https://bin.sbb.ch/artifactory/webapp/#/home](https://bin.sbb.ch/artifactory/webapp/#/home) öffnen |
| 2   | Oben rechts auf "Log In" klicken |
| 3   | Anmelden |
| 4   | Oben rechts auf die eigene Personalnummer klicken |
| 5   | Passwort eingeben und auf "Unlock" klicken |
| 6   | Im Bereich der "Authentication Settings" einen neuen API Key generieren lassen und diesen gleich mit dem Kopier-Button in die Zwischenablage kopieren. |
| 7   | Den API Key in die settings.xml Datei einfügen und die Datei speichern. |

Der Verbindung zwischen Artifactory und IntelliJ steht nun nichts mehr im Weg :-)

---

### IntelliJ IDEA einrichten
Im IntelliJ findet man in den allgemeinen Einstellungen auch die Einstellungen für Maven.
![InteliJ Maven Settings](../maven/1657700434.png "InteliJ Maven Settings")

Die wichtigsten Einstellungen sind:
| Einstellung | Beschreibung |
| --- | --- |  
| Maven home directory | Zeigt auf das Verzeichnis einer Maven-Installation. Das IntelliJ verfügt bereits über eine Maven-Installation, diese wird als "Bundled" bezeichnet |
| User settings file | Die XML-Datei, welche weiter oben angelegt wurde |
| Local repository | Der Ablageort für das lokale Repository |

Bei diesen Einstellungen muss überprüft werden, dass die Angaben für die XML-Datei und das lokale Repository korrekt sind.

---

### Repository

#### Lokal
Zwischen dem JFrog Artifactory und deinem lokalen Repository gibt es also nun eine Verbindung. Sobald dein Projekt (in der Datei pom.xml) bestimmte Abhängigkeiten definiert, werden diese über das Artifactory aufgelöst und die entsprechenden Artefakte werden in dein lokales Repository heruntergeladen.

Beispiel:
In meiner pom.xml Datei definiere ich die folgende Abhängigkeit zu der Fremdbibliothek von Lombok
```
<!-- Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.12</version>
</dependency>
```

Sobald ich die pom.xml Datei speichere, wird das angeforderte Artefakt durch die oben eingerichtete Verbindung im Artifactory gesucht. Dieser Vorgang kann auch manuell gemacht werden. Dazu kann man sich auf [https://bin.sbb.ch](https://bin.sbb.ch) einloggen.  
Auf der Seite können mit dem Suchfeld bestimmte Artefakte gesucht werden. Als Stichwort reicht ein Teil des Names des gesuchten Artefakts.
![Artifactory](../maven/1657700481.png "Artifactory")

Die angezeigten Resultate lassen sich durch einen Klick auf die Tabellen-Header sortieren. Ich habe die Sortierung nach Modifizierungsdatum gewählt
![Artifactory Suchresultat](../maven/1657700492.png "Artifactory Suchresultat")

Wie wir sehen gibt es die von uns gewünschte Lombok-Version 1.18.12 als verschiedene Artefakte: javadoc, sources, pom und jar. Wir können auch sehen, dass es bereits eine neuere Version gibt 1.18.14.

Der angeforderte Artefakt wird nun in das lokale Repository heruntergeladen, wir müssten ihn dort also finden können. Die Artefakte sind nach Packages abgelegt. Beim Lombok-Artefakt fordern wir ja die Group-ID "org.projectlombok" an. Unter diesem Verzeichnis müsste das Artefakt nun zu finden sein:
![Artefakt im lokalen Repository](../maven/1657700516.png "Artefakt im lokalen Repository")

Das Artefakt wird unterhalb der Group-ID noch in einem Ordner mit der Artifact-ID abgelegt. Innerhalb dieses Verzeichnisses werden alle bisher angeforderten Versionen von Lombok abgelegt.
![Artefakt Versionen](../maven/1657700520.png "Artefakt Versionen")

Die beiden Dateien mit der endung "lastUpdated" dienen dem Maven zur Kontrolle der letzten Synchronisierung.

#### Remote (JFrog / Artifactory)
Das Artifactory von JFrog ist das verwaltete Verzeichnis zur Speicherung und Beschreibung digitaler Objekte. Es ist also unser digitales Archiv bei der SBB. In diesem Archiv befinden sich Millionen von Fremdbibliotheken in unterschiedlichsten Versionen. Zudem werden alle Versionen von unseren ausgelieferten Applikationen dort archiviert.

---

### Commands
Maven lässt sich auf der Kommandozeile oder im IntelliJ-Terminal ausführen. Damit wir sehen, ob das wirklich klappt könnt ihr das Terminal öffnen und den Befehl
```
mvn -version
```
eingeben. Das sollte nun in etwa so aussehen:
![Maven Console](../maven/1657700535.png "Maven Console")

Bevor wir die einzelnen Befehle kurz anschauen werfen wir einen Blick auf die einzelnen Phasen des Maven-Lebenszyklus.
![Maven Phasen](../maven/1657700671.png "Maven Phasen")

Jeder der in der Grafik genannten Befehle wird zusätzlich die vorangehenden Befehle ausführen. Die Ausführung von "mvn package" wird also die Phasen _validate_, _compile_, _test_ und _package_ ausführen.

#### help
```
mvn -help
```
Das Ergebnis dürfte klar sein. Maven listet alle möglichen Befehle auf.

#### dependency:tree
```
mvn dependency:tree
```
Dieser Befehl listet alle Abhängigkeiten zu Fremdbibliotheken als Baum auf. Das ist grundsätzlich sehr praktisch wenn man doppelte Abhängigkeiten erkennen/vermeiden will.

#### clean
```
mvn clean
```
Dieser Befehl löscht alle vorherigen lokale Maven-Builds, indem er das Verzeichnis "target" löscht.

#### compile
```
mvn compile
```
Kompiliert den Sourcecode je nach Abhängigkeit von Plugins. Wenn also beispielsweise ein Maven-Compiler-Plugin verwendet wird, so wird dieses als Regelwerk für die Kompilierung herangezogen.

#### test
```
mvn test
```
Führt alle Tests aus. In einem Java-Projekt sind dies beispielsweise alle Unit-Tests mit jUnit.

#### package
```
mvn package
```
Führt einen lokalen Maven-Build aus, startet alle Tests und paketiert die Anwendung (normalerweise als JAR) in das Verzeichnis "target".

#### verify
```
mvn verify
```
Prüft die Testergebnisse aller ausgeführten Integrationstests, normalerweise wird das Maven-Failsafe-Plugin für diesen Maven-Befehl vorausgesetzt.

#### install
```
mvn install
```
"Installiert" den Artefakt im lokalen Maven-Repository.

#### deploy
```
mvn deploy
```
"Installiert" den Artefakt im Remote-Repository (Artifactory)

Die Maven-Befehle lassen sich kombinieren. Sehr nützlich ist zum Beispiel:
```
mvn clean install
```

Selbstverständlich gibt es sehr viele Optionen für die einzelnen Maven-Befehle.

---

## Continuous Integration
Kontinuierliche Integration beschreibt den Prozess der fortlaufenden Zusammenfügung von Einzelkomponenten zu einer Anwendung. Das Ziel dabei ist stets die Steigerung der Qualität einer Software. Inhaltlich wird nicht nur die Software zusammengebaut, es können auch Tests durchgeführt oder Messungen der Code-Qualität vorgenommen werden.
Der Auslöser ist stets das Hochladen (Einchecken) von Änderungen am Programmcode in die Versionsverwaltung. Eine Weiterentwicklung der kontinuierlichen Integration stellt die kontinuierliche Auslieferung (Continuous Delivery) dar, dort wird in bestimmten Zeitabständen, bei Erreichen einer bestimmten Qualität oder manuell eine neue Version der Software auf eine Zielplattform ausgeliefert.

---

### Grundsätze
| Grundsatz | Beschreibung |
| --- | --- |
| Versionsverwaltung | Gemeinsame Codebasis für alle Projektbeteiligten |
| Statische Code-Analyse | Einheitlich definierte Qualität der Applikation |
| Kontinuierliche Test-Entwicklung | Änderungen an der Software sind durch entsprechende Unit-Tests abzudecken |
| Häufige Integration | Code-Review durchführen und Änderungen möglichst rasch einchecken. Kleiner Stack an offenen Pull-Requests |
| Integration Develop | Nahe am Develop-Branch entwickeln |
| Kurze und häufige Testzyklen | Häufiger Testen und dafür den Umfang der Tests klein halten |
| Integrationsumgebung | Alle Änderungen sollten auf einem der Produktion ähnlichen System getestet werden |
| Einfacher Zugriff | Alle Projektbeteiligten, also auch Nicht-Entwickler, benötigen Zugriff auf die Ergebnisse der Software-Entwicklung |
| Automatisiertes Reporting | Informationen zu Auslieferungen der Software müssen einfach und verständlich einsehbar sein |
| Automatisiertes Deployment | Die Auslieferung der Software auf unterschiedliche Plattformen sollte so einfach wie möglich sein |

---

### Vorteile
* Probleme bei der Auslieferung können früh erkannt und behoben werden
* Test des Gesamtsystems als Verbund
* Logik-Fehler können durch Unit-Testing rasch gefunden und behoben werden
* Hohe Verfügbarkeit von Test- und Integrationsplattformen (auch für den Kunden)
* Schnelle Reaktion des Systems beschleunigt die Entwicklung

---

### Jenkins
Die Software, welche von der SBB für CI/CD eingesetzt wird ist Jenkins. Die Anwendung ist unter https://ci.sbb.ch/ erreichbar.

---

### Deployment-Pipeline
Zum Gesamtsystem von CI/CD (bei der SBB) und damit der Deployment-Pipeline gehören die folgenden Systeme/Anwendungen:
| System | Zweck |
| --- | --- |
| GIT-Repository | Source-Code Ablage |
| Artifactory | Digitales Archiv |
| Jenkins | CI/CD-Plattform |
| Docker | Containervirtualisierung |
| Openshift Container Plattform | Container Anwendungsplattform |

Bei Änderungen am GIT-Repository wird durch den Jenkins ein Maven-Build ausgelöst. Dieser legt je nach Build-Konfiguration ein neues Artefakt im Artifactory ab (CI). Aus dem Artifactory kann dieses Artefakt über den Jenkins via Docker auf die Openshift Container Plattform ausgeliefert werden (CD).

Für die Konfiguration einer Deployment-Pipeline sind die folgenden Dateien notwendig:
* Jenkinsfile
* Pipeline-Konfiguration als JSON

#### Jenkinsfile
Diese Datei wird durch den Jenkins in jedem GIT-Repository gesucht. Wenn Sie gefunden wird, dann wird der Jenkins anhand der Konfiguration im GIT-Repository handeln.
Der minimale Inhalt ist wie folgt:
```
#!groovy
@Library(['pipeline-helper@release', 'esta-cloud-pipeline@release']) _

estaCloudPipeline([:])
```
Die erste Zeile markiert diese Datei als Groovy-Script. Die zweite Zeile lädt die zu verwendende Bibliothek, welche in diesem Fall der Release des Pipeline-Helpers ist.
Die letzte Zeile gibt den Namen der zu verwendenden Konfiguration an. Die Datei für die Konfiguration muss also den Namen estaCloudPipeline.json haben.

#### Pipeline-Konfiguration als JSON
Die Pipeline-Konfiguration dient dem Jenkins zur Konfiguration der gesamten Pipeline inklusive deren auswählbaren Möglichkeiten für manuelle Optionen.
Wir betrachten eine etwas umfangreichere Konfiguration am folgenden Beispiel:
```
{
  "mainBranch": "master",
  "hotfixBranch": "hotfix",
  "docker": {
    "artifactoryDockerRepo": "cca",
    "openshiftAppName": "interviewtool-core"
  },
  "mvn": {
    "parentPom": "pom.xml",
    "deployableArtifactsPom": "pom.xml",
    "artifactoryMavenRepo": "cca.mvn"
  },
  "stages": [
    {
      "stageName": "dev",
      "isOpenshiftDeploymentEnabled": true,
      "openshiftProject": "interviewtool-dev",
      "openshiftCluster": "aws",
      "openshiftJenkinsCredentialsId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "preCiDeploymentJob": "",
      "postCiDeploymentJob": ""
    },
    {
      "stageName": "int",
      "isOpenshiftDeploymentEnabled": true,
      "openshiftProject": "interviewtool-int",
      "openshiftCluster": "aws",
      "openshiftJenkinsCredentialsId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "preCiDeploymentJob": "",
      "postCiDeploymentJob": ""
    },
    {
      "stageName": "prod",
      "isOpenshiftDeploymentEnabled": true,
      "openshiftProject": "interviewtool-prod",
      "openshiftCluster": "aws",
      "openshiftJenkinsCredentialsId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "preCiDeploymentJob": "",
      "postCiDeploymentJob": ""
    }
  ],
  "steps": [
    {
      "stepType": "continuous",
      "isBuildEnabled": true,
      "branchNamePrefixes": [
        "feature", "develop", "bugfix"
      ],
      "additionalBuildParams": "-DskipITs"
    },
    {
      "stepType": "integrationBuild",
      "isBuildEnabled": true,
      "xrayScanEnabled": true,
      "failOnXrayScan": false,
      "sonarScanEnabled": true,
      "staging": {
        "stages": [
          "dev"
        ]
      },
      "triggerBuildOnCommitEnabled": false
    },
    {
      "stepType": "release",
      "isBuildEnabled": true,
      "xrayScanEnabled": true,
      "failOnXrayScan": true,
      "sonarScanEnabled": true,
      "staging": {
        "stages": [
          "dev"
        ]
      },
      "additionalBuildParams": "-DskipITs",
      "triggerBuildOnCommitEnabled": false,
      "hotfixCreationEnabled": false
    },
    {
      "stepType": "hotfix",
      "isBuildEnabled": true
    }
  ]
}
```
Die folgenden Einstellungen können in der Konfiguration gefunden werden:
| Gruppe | Einstellung | Beschreibung |
| --- | --- | --- |
| Root | mainBranch | Name des Produktions-Branches. Normalerweise master oder develop |
| Root | hotfixBranch | Prefix für Hotfix-Branches |
| Docker | artifactoryDockerRepo | Repository-Pfad für Docker |
| Docker | openshiftAppName | Name der Applikation auf der Openshift Container Plattform |
| Maven | parentPom | Pfad zum pom.xml |
| Maven | deployableArtifactsPom | Angabe aller auslieferbaren pom.xml |
| Maven | artifactoryMavenRepo | Name des Artifactory-Verzeichnisses |
| Stage (Angabe erfolgt pro Stage) | stageName | Name der Plattform als Abkürzung (dev, test, inte, prod) |
| Stage (Angabe erfolgt pro Stage) | isOpenshiftDeploymentEnabled | Deployment auf Openshift erlaubt (true / false) |
| Stage (Angabe erfolgt pro Stage) | openshiftProject | Name des Projekts auf der Openshift Container Plattform |
| Stage (Angabe erfolgt pro Stage) | openshiftCluster | Openshift Cluster (OTC, AWS, ...) |
| Stage (Angabe erfolgt pro Stage) | openshiftJenkinsCredentialsId | Secret Key, damit sich Jenkins auf der Openshift Container Plattform einloggen kann |
| Stage (Angabe erfolgt pro Stage) | preCiDeploymentJob | Name des vorgelagerten Jenkins-Jobs |
| Stage (Angabe erfolgt pro Stage) | postCiDeploymentJob | Name des nachgelagerten Jenkins-Jobs |
| Step (Angabe erfolgt pro Step) | stepType | Name der Option |
| Step (Angabe erfolgt pro Step) | isBuildEnabled | Option aktiv (true / false) |
| Step (Angabe erfolgt pro Step) | branchNamePrefixes | Angabe der Präfixe der zu verwendenden Branches |
| Step (Angabe erfolgt pro Step) | additionalBuildParams | Weitere Maven-Angaben |
| Step (Angabe erfolgt pro Step) | xrayScanEnabled | XRay aktiv (true / false) |
| Step (Angabe erfolgt pro Step) | failOnXrayScan | Build schlägt fehl wenn XRay fehlschlägt (true / false) |
| Step (Angabe erfolgt pro Step) | sonarScanEnabled | Sonar aktiv (true / false) |
| Step (Angabe erfolgt pro Step) | staging | Angabe von Stages zur Auslieferung |
| Step (Angabe erfolgt pro Step) | triggerBuildOnCommitEnabled | Wird dieser Build ausgeführt, wenn ein Commit erfolgt (true / false) |
| Step (Angabe erfolgt pro Step) | hotfixCreationEnabled | Darf dieser Build einen Hotfix-Branch erzeugen (true / false) |

Die genauen Beschreibungen der einzelnen Einstellungen sind sehr umfangreich.
Weitere Informationen gibt es hier: https://confluence.sbb.ch/display/CLEW/Esta+Cloud+Pipeline+-+Parameter+Documentation

Zu Beginn gibt es Konfigurationen für GIT und Docker. Anschliessend benötigt Maven den Namen und den Pfad für das POM.
Die Auslieferung erfolgt auf sogenannte Stages, dies sind Projekte auf der Openshift Container Plattform. Jede Stage kann individuell konfiguriert werden.
Wichtig dabei ist der Schlüssel, welcher auf dem Jenkins hinterlegt sein muss. Nur mit diesem Schlüssel kann sich der Jenkins für ein Deployment auf der Openshift Container Plattform einloggen. Für jeden Step kann konfiguriert werden, ob er auf eine oder mehrere Stages ausgeliefert werden soll.
Die häufigsten Steps sind:
* Continuous
* Release
* Deploy

Der Continuous-Build dient dabei Branches vom Typ feature oder bugfix (je nach Konfiguration) zu bauen. Nur erfolgreiche Builds dieser Weiterentwicklungen oder Bugfixes können anschliessend in den Haupt-Entwicklungsbranch zurück gemerged werden. Dieser Build wird nicht auf eine Stage ausgeliefert.
Der Release-Build dient der Herstellung einer neuen Version einer Anwendung. Dieser Build taggt die Version auf dem GIT-Repository und liefert sie auf die entsprechend konfigurierten Stages aus. Vorbehalten bleibt normalerweise der Release auf eine produktive Umgebung.
Der Deploy-Build dient dem Deployment einer bestimmten Version auf eine bestimmte Stage. Die Stage kann dabei gewählt werden. Dieser Step-Typ wird normalerweise für den Release auf Integration- oder Produktionsplattformen verwendet.

Zum Nachlesen gibt es hier noch die Dokumentation der Pipeline: https://confluence.sbb.ch/display/CLEW/Esta+Cloud+Pipeline
