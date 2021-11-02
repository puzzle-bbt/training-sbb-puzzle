---
title: "Heroes Tour: Take-aways"
linkTitle: "Heroes Tour: Take-aways"
weight: 1
date: 2021-11-01
description: >
    Heroes Tour: Take-aways
---

In diesem Doc sind die wichtigsten Take-aways des Tour of Heroes Tutorials von Angular zusammengefasst.

Die Dokumentation von Angular und das Tutorial findest du unter <a href="https://angular.io/docs" target="_blank">angular.io/docs</a>.

### Teil 1 - Angular components

Components sind die Bausteine von Angular-Apps. Eine App besteht normalerweise aus verschiedenen components.

Das Grundgerüst eines component kannst du mit dem CLI von Angular erstellen.

Die Implementierung besteht vor allem aus drei Quelldateien: TypeScript-Klasse, HTML-Template und einer Datei mit CSS-Styles.

**Erstellung eines component**

Um einen component mit dem CLI zu erstellen, verwende innerhalb des im Setup erstellten Basisverzeichnis den Befehl

```shell
ng generate component <component-name>
```

Hier ist ```<component-name>``` die Bezeichnung des Verzeichnis, das für den component erstellt wird. Die Abkürzung```ng``` steht für Angular.

**Verzeichnisstruktur eines component**

Die Verzeichnisse der einzelnen components befinden sich normalerweise innerhalb des Verzeichnisses ```<base-directory>/src/app```.

Die Verzeichnisstruktur eines components ```<component-name>``` sieht folgendermassen aus:

```shell
└── <component-name>
    ├── <component-name>.component.css
    ├── <component-name>.component.html
    ├── <component-name>.component.spec.ts
    └── <component-name>.component.ts
```

**Quellcode eines component**

Der vom CLI erstellte Code der TypeScript-Klasse eines component mit der Bezeichnung ```example``` ist unten aufgelistet.

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
```

```@Component``` ist ein decorator und enthält Metadaten für Angular. Im Code oben sind drei Eigenschaften definiert:

1. ```selector```: element selector für den component
2. ```templateUrl```: URL für das HTML-Template des component
3. ```styleUrls```: Liste mit URLs für Dateien mit CSS-Styles für den component

**Element selector eines component**

Mit dem element selector eines component kann man den component im HTML-Template eines anderen component einbinden. Der selector ist zusammen mit anderen Metadaten im decorator ```@Component``` definiert.

```html
<app-example></app-example>
```

**Deklaration eines component**

Um einen component an einer anderen Stelle mit dem element selector zu verwenden, muss man den component in ```<base-directory>/src/app/app.module.ts``` deklarieren.

```ts
declarations: [
    AppComponent,
    ExampleComponent
]
```

Allgemein muss man jeden component in genau einem NgModule deklarieren. Meistens deklariert man components im ```AppModule```, also in ```<base-directory>/src/app/app.module.ts ```.

### Teil 2 - Property binding

Mit property bindings kann man im HTML-Template eines component auf Eigenschaften der TypeScript-Klasse zugreifen.

**Interpolation binding und Pipes**

Ein Beispiel für interpolation ist unten aufgelistet. Im Beispiel greift man im HTML-Tmplate des component auf eine Eigenschaft der TypeScript-Klasse zu.

<details>
<summary>example.component.ts (click to expand)</summary>

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  exampleName : string = 'interpolation';

  constructor() { }

  ngOnInit() {
  }
  
}
```

</details>
<br />

```angular2html
<h2>{{exampleName}}</h2>
```

Mit pipes ```|``` kann man Strings, die man mit interpolation im HTML-Template einbindet, formatieren.

Im Beispiel unten formatiert man einen String in uppercase.

```angular2html
<h2>{{heroName | uppercase}}</h2>
```

**Two-way binding**

Mit einem two-way binding kann man eine Eigenschaft einer TypeScript-Klasse an eine HTML-Textbox binden.

Bei einem two-way binding fliessen Daten in beide Richtungen. Wenn die Eigenschaft der TypeScript-Klasse geändert wird, ändert sich der Text in der Textbox und umgekehrt.

Um ein two-way binding zu erstellen, verwendet man das Attribut ```[(ngModel)]```.

<details>
<summary>example.component.ts (click to expand)</summary>

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  exampleName : string = 'two-way binding';

  constructor() { }

  ngOnInit() {
  }
  
}
```

</details>
<br />

```angular2html
<div>
    <input [(ngModel)]="exampleName">
</div>
```

Um two-way bindings zu verwenden, muss man das Modul ```FormsModule``` im im ```AppModule``` (beziehungsweise in ```<base-directory>/src/app/app.module.ts```) importieren und im Array ```imports``` auflisten.

```ts
import { FormsModule } from '@angular/forms';
```

```ts
imports: [
    BrowserModule,
    FormsModule
]
```

**Class binding**

Mit einem class binding kann man eine CSS class unter einer Bedingung zu einem HTML-Element hinzufügen oder entfernen.

im Beispiel unten ändert sich der CSS-Style abhängig davon, ob ```highlightName``` ```true``` ist oder nicht.

<details>
<summary>example.component.ts (click to expand)</summary>

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  exampleName : string = 'class binding';

  highlightName : boolan = true;

  constructor() { }

  ngOnInit() {
  }
  
}
```

</details>
<br />

```angular2html
<li [class.selected]="highlightName">
    {{exampleName}}
</li>
```

**Input property binding und @Input() decorator**

Mit dem decorator ```@Input()``` kann man eine Eigenschaft einer TypeScript-Klasse als input property festlegen.

Damit kann ein externer component an diese Eigenschaft gebunden werden, im Sinn einer Eingabe-Eigenschaft.

```angular2html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

```ts
@Input() hero?: Hero;
```

Dabei ist ```[hero]``` die Syntax für ein property binding. Dabei handelt es sich um ein one-way data binding, von der Eigenschaft ```selectedHero``` der TypeScript-Klasse des äusseren component zur Eigenschaft ```hero``` der TypeScript-Klasse des inneren component.

Das property binding updated bei einer Änderung der Eigenschaft ```selectedHero``` die Eigenschaft ```hero``` ebenfalls.

Mit dem property binding wird einem parent component Kontrolle über einen child component gegeben.


### Teil 3 - Angular directives

**ngFor, ngIf structural directives**

Mit dem structural directive ```*ngFor``` kann man innerhalb des HTML-Template durch mehrere Elemente der TypeScript-Klasse iterieren.

<details>
<summary>example.component.ts (click to expand)</summary>

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  examples : string[] = [
    "interpolation",
    "two-way binding",
    "class binding"
  ]

  constructor() { }

  ngOnInit() {
  }
  
}
```

</details>
<br />

```angular2html
<li *ngFor="let exampleName of examples">
    {{exampleName}}
</li>
```

Um einen Bereich des HTML-Templates nur unter einer Bedingung darzustellen, verwendet man das structural directive ```*ngIf```.

Zum Beispiel kann man testen, ob eine Eigenschaft der TypeScript-Klasse ```null``` oder ```undefined``` ist.

<details>
<summary>example.component.ts (click to expand)</summary>

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  exampleName : string = "interpolation";
  selectedExample : string = "interpolation";

  constructor() { }

  ngOnInit() {
  }
  
}
```

</details>
<br />

```angular2html
<div *ngIf="exampleName == selectedExample">
    {{exampleName}}
</div>
```

### Teil 4 - User events, event handlers

**Click event binding, click event handler**

Um einen click event handler zu registrieren, verwendet man das Attribut ```(click)```.

<details>
<summary>example.component.ts (click to expand)</summary>

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
    
  examples : string[] = [
    "interpolation",
    "two-way binding",
    "class binding"
  ]

  selectedExample : string = "interpolation";

  constructor() { }

  ngOnInit() {
  }
    
  onSelect(example: string): void {
    this.selectedExample = example;
  }
  
}
```

</details>
<br />

```angular2html
<li *ngFor="let example of examples" (click)="onSelect(example)"> 
</li>

<h2>{{selectedExample}}</h2>
```

### Teil 5 - Services

Mit Services kann man in Angular Daten vom Server laden.

Um einen Service innerhalb eines component zu verwenden, verwendet man dependency injection. Dependency injection ist ein Design Pattern, bestehend aus client, service und injector.

**@Injectable decorator**

Um einen Service über das dependency injection system von Angular zu verwenden, registriert man den Service bei einem injector.

Für die Registrierung verwendet man den decorator ```@Injectable```. Normalerweise registriert man den Service beim injector ```root```.

```typescript
@Injectable({
  providedIn: 'root',
})
```

Wenn ein Service vom injector ```root``` bereitgestellt wird, erstellt Angular ein Singleton des Service. Das heisst, es gibt nur eine Instanz des Service. Alle clients verwenden dieselbe Instanz des Service.

Ein Service kann selber injected dependencies haben.

**Dependency injection**

Bei der dependency inejction übergibt man einen Service dem Konstruktor der TypeScript-Klasse eines component.

```typescript
constructor(private heroService: HeroService) {}
```

Anschliessend kann man den Service innerhalb der Klasse verwenden.Der Service ist jetzt eine Eigenschaft der TypeScript-Klasse.

Wenn man zu einer mit dependency inejction hinzugefügten Eigenschaft einer TypeScript-Klasse im HTML-Template ein binding erstellen will, muss die Eigenschaft ```public``` sein.

**Lifecycle hook ngOnInit()**

Services sollten Daten nicht im Konstruktor laden, sondern im lifecycle hook ```ngOnInit()```.

**Observer Pattern**

Das Laden von Daten durch einen Service kann eine asynchrone Operation sein. Zum Beispiel weiss man beim Laden von Daten von einem Server nicht genau, wann die Daten eintreffen.

Um dieses Problem zu vermeiden, registriert man beim Laden von Daten von einem Service eine Callback-Funktion. Sobald das Laden der Daten abgeschlossen ist, wird die Callback-Funktion aufgerufen.

Erstens hat man eine Funktion, die ein Objekt vom Typ ```Observable<T>``` zurückgibt. Der type parameter `T` gibt den Datentyp der Daten an, die man vom Service haben will.
- Funktionen für HTTP requests des http client von Angular liefern oft Daten vom Typ ```Observable```.
- Mit der Funktion ```of``` kann man Daten vom Typ ```T``` in ein Objekt vom Typ ```Òbservable<T>``` einpacken.

```typescript
// Code in der TypeScript-Klasse des Service

import { Observable, of } from 'rxjs';
```

```typescript
// Code in der TypeScript-Klasse des Service

getHeroes(): Observable<Hero[]> {
  return of(HEROES);
}
```

Ein Objekt vom Typ ```Observable``` hat die Funktion ```subscribe()```.

Der Funktion ```subscribe()``` übergibt man eine Callback-Funktion (im Beispiel unten eine Lambda-Expression). Sobald die Daten des Service bereit sind, werden die Daten an die Callback-Funktion übergeben.

```typescript
// Code in der TypeScript-Klasse des client

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(loadedHeroes => this.heroes = loadedHeroes);
}
```

### Teil 6 - Router

Mit dem Router von Angular ändert man den angezeigten component abhängig von der URL.

**Router-Modul**

Den Router konfiguriert man in einem separaten Modul ```AppRoutingModule```, beziehungsweise in der Datei ```{base_dir}/src/app/app-routing.module.ts```.

Um das Modul zu erstellen, verwende den folgenden Befehl:

```shell
ng generate module app-routing --flat --module=app
```

- Mit ```--flat``` wird das Modul ohne eigenes Verzeichnis erstellt.
- Mit ```--module=app``` wird das Modul bei den imports von ```AppModule``` aufgelistet.


Ersetze den generierten Quellcode mit folgendem Code:

<details>
<summary>app-routing.module.ts (click to expand)</summary>

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
```

</details>

<br />

Der vom Router angezeigte component wird normalerweise mit dem selector

```html
<router-outlet></router-outlet>
```

in das HTML-Template des component ```AppComponent``` eingebunden.

**Deklaration**

Um den selector ```<router-outlet>``` zu verwenden, muss das Modul ```AppRoutingModule``` im Modul ```AppModule```, beziehungsweise in ```{base_directory}/src/app/app.module.ts``` importiert sein.

**Routes**

Eine ```Route``` gibt dem Router an, welchen component er bei einer bestimmten URL anzeigen soll. Routes sind im Array ```routes``` des Router-Moduls ```AppRoutingModule``` aufgelistet.

Normalerweise hat eine ```Route``` zwei Eigenschaften:

- ```path```: String, um eine URL in der Adresszeile des Browsers zu matchen
- ```component```: Component, den der Router für die gematchte URL anzeigen soll

```Route``` ist ein Interface.

Beispiel:

```typescript
const routes: Routes = [
  {path : 'example', component : ExampleComponent}
];
```

**Route für die Basis-URL**

Der ```path``` für die Basis-URL der App ist der leere String ```''```.

```typescript
path = '';
```

**Route mit Parametern**

it der Syntax `:<parameter-name>` definiert man einen Teil einer Route als Parameter.

Im angezeigten component liest man dann die URL aus, extrahiert den Wert des Parameters aus der URL, und passt den component an.

Beispiel:

```typescript
{path: 'detail/:id', component: HeroDetailComponent},
```
Der Doppelpunkt gibt an, dass ```:id``` ein Parameter ist und symbolisch für einen bestimmten Wert steht.

Um die URL auszulesen und den Wert des Parameters aus der URL auszulesen, braucht man den folgenden import:

```typescript
import { ActivatedRoute } from '@angular/router';
```

Auf die ```ÀctivatedRoute``` greift man über dependency injection zu:

```typescript
constructor(
  private route: ActivatedRoute,
) {}
```

Schliesslich extrahiert man den Parameter in der URL folgendermassen:

```typescript
id = Number(this.route.snapshot.paramMap.get('id'));
```

Die Werte in der ```paramMap``` sind vom Typ ```string```. Mit der Funktion ```Number()``` wird der Wert des Parameters in einen Wert vom Typ ```number``` umgewandelt. Falls die type conversion nicht möglich ist, wird der Wert ```NaN``` (not a number) zurückgegeben.


**routerLink directive**

Um einen Link im HTML-Template eines component einzubinden, kann man das Angular directive ```routerLink``` mit einem Pfad verwenden.

Beispiel:

```html
  <a routerLink="/heroes">Heroes</a>
```

Ein directive kann man als Attribut eines Elements im HTML-Template angeben. Ein directive ist in einer TypeScript-Klasse definiert.

### Teil 7 - Server-Daten / HTTP requests

Um HTTP requests zu generieren, verwendet man den HTTP client von Angular.

Um den HTTP client zu verwenden, importiert man das ```HttpClientModule``` im ```AppModule```, beziehungsweise in ```{base_dir}/src/app/app.module.ts```, und fügt das ```HttpClientModule``` zum Array ```imports``` hinzu.

```typescript
import { HttpClientModule } from '@angular/common/http';
```

```typescript
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```

HTTP requests generiert man in der Regel innerhalb eines ```Service```. In einem component verwendet man den Service dann über dependency injeciton.

```typescript
// Code innerhalb des Service

import { HttpClient, HttpHeaders } from '@angular/common/http';
```

Den ```HttpClient``` verwendet man innerhalb des ```Service``` auch über dependency injection:

```typescript
// Code innerhalb des Service

constructor(
  private http: HttpClient) {}
```

**HTTP Get requests**

Ein HTTP Get requests eines Service ist üblicherweise folgendermassen implementiert:

```typescript
// Code innerhalb des Service

getResult(restUrl: string): Observable<T> {
  return this.http.get<T>(restUrl);
}
```

Hier enthält ```restUrl``` eine URL der REST-API, für die ein GET request generiert wird.

Der Service liefert also ein ```Observable```, das über einen type parameter ```T``` (üblicherweise ein Interface) das Format der geladenen Daten angibt.

Ein client, welcher den Service verwendet, muss über die Funktion ```subscribe()``` von ```Observable``` eine Callback-Funktion registrieren. Die Callback-Funktion wird aufgerufen, sobald die Daten vom Server bereit sind.

Beispiel:

```typescript
// Code im client

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(loadedHeroes => this.heroes = loadedHeroes);
}
```

Anmerkung: Eine REST-API liefert Daten beispielsweise als JSON-Objekt. Die API des Servers bestimmt die Struktur des JSON-Objekts, und je nach API muss man die benötigten Daten zuerst extrahieren. Mann kann dann zum Beispiel das Interface ```T``` an die Struktur des JSON-Objekts anpassen.

WICHTIG: Damit ein HTTP request überhaupt ausgeführt wird, muss die Funktion ```subscribe()``` des resultierenden ```Observable```-Objekts aufgerufen werden, auch wenn man keine Callback-Funktion registriert.

**Fehlerbehandlung**

Optional kann man Fehlerbehandlung einbauen, für den Fall dass der GET request fehlschlägt.

Beispiel:

```typescript
// Code innerhalb des Service

getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

Mit ```pipe()``` wird das ```Observable``` nachbearbeitet. Für den Fall eines Fehlers wird eine Funktion für die Fehlerbehandlung registriert.

```typescript
// Code innerhalb des Service

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error);

    return of(result as T);
  };
}
```

Im Fall eines Fehlers wird der Fehler auf der Konsole des Browsers ausgegeben, und manuell ein ```Observable``` mit einem leeren Array als Antwort für den client konstruiert.

**HTPP Put, Post und Delete requests**

Analog zu HTTP Get requests kann man auch Put, Post und Delete requests verwenden, abhängig von der REST-API des Servers.

WICHTIG: Damit ein HTTP request überhaupt ausgeführt wird, muss die Funktion ```subscribe()``` des resultierenden ```Observable```-Objekts aufgerufen werden, auch wenn man keine Callback-Funktion registriert.
