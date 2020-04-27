# KNACSS

Reborn!


# Todo List

## knacss.scss

Principe de briques modulaires :

- KNACSS de base est constitué uniquement des fichiers "Core".
- Les fichiers "Utils" seront des briques optionnelles (= les `@import` seront commentés par défaut).


```scss
// WARNING : Only Core is imported by default. Just add other files if you need them.


// CORE
@import "abstracts/variables";           // CSS variables for project
@import "abstracts/breakpoints-sass";    // Sass variables and mixins TODO

// CORE COMPONENTS
@import "base/reset-base";
@import "base/reset-accessibility";
@import "base/reset-forms";
@import "base/reset-print";

@import "components/select";
@import "components/radio";
@import "components/checkbox";
@import "components/switch";
@import "components/button";    // TODO
@import "components/skip-links";
@import "components/burger";

// UTILS
@import "utils/grillade";       // grid system with Grid Layout

// UTILS COMPONENTS
@import "components/alert";     // alert styles TODO
@import "components/arrow";     // arrow styles TODO
@import "components/badge";     // badge styles TODO
@import "components/table";     // data table styles TODO
@import "components/tab";       // tab styles TODO
@import "components/tag";       // tag styles TODO



// TODO CORE OR NOT ?
@import "utils/utils-layout";
@import "utils/utils-global";
@import "utils/utils-spacers";
@import "utils/utils-responsive"; // TODO

```


## Sass / PostCSS 

Sass ou PostCSS absolument nécessaire pour nous :

- Variables Sass :
  - $breakpoints (indispensable)
  - $variants-list (indispensable ?)
- Mixins Sass : 
  - respond-to (indispensable ?)
  - font-sizes (indispensable ?)
  - grid mixin (indispensable ?)
- Rassemblement de fichiers (`@import`)
- Nestings
- Constructeurs de Grillade
- Constructeurs de classes utilitaires 