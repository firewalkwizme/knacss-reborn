# KNACSS Reborn

Reborn!

<http://www.knacss.com>

KNACSS, c'est une sorte de feuille de style CSS "reset" sur-vitaminée qui permet de commencer un projet à partir de zéro tout en tenant compte de bonnes pratiques générales (accessibilité, performance, responsive webdesign, grille de mise en forme).

Conçu par l'agence web [Alsacreations.fr](http://alsacreations.fr) et pensé pour être couplé avec des préprocesseurs tel que Sass, le micro-framework KNACSS est employé quotidiennement sur toute sorte de projet web quel que soit son type ou son envergure.

## Reborn !

Né en 2012 et après près de 10 années de bons et loyaux services, le projet initial "KNACSS" d'Alsacréations laisse place à une toute nouvelle version, totalement remaniée : **KNACSS Reborn**.

La [Documentation de KNACSS Reborn](https://www.knacss.com/doc.html) détaille les changements opérés.

## Modulaire

Principe de briques modulaires :

- KNACSS Reborn est constitué uniquement des fichiers "Core".
- Les fichiers "Utils" seront des briques optionnelles (= les `@import` seront commentés par défaut).

```scss
// CORE
@import "abstracts/variables-sass";

@import "base/reset-base";
@import "base/reset-accessibility";
@import "base/reset-forms";
@import "base/reset-print";
@import "base/layout";

@import "abstracts/mixins-sass";

// UTILITY CLASSES
// @import "utils/utils-global";
// @import "utils/utils-spacers";
// @import "utils/grillade";

// COMPONENTS (add them only if you need)
// @import "components/button";
// @import "components/burger";
// @import "components/checkbox";
// @import "components/radio";
// @import "components/quote";
```
