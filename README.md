# KNACSS

Reborn!

![knacki](https://github.com/raphaelgoetter/knacss-reborn/blob/master/knacki.png)


# Todo List

## knacss.scss

Principe de briques modulaires :

- KNACSS de base est constitué uniquement des fichiers "Core".
- Les fichiers "Utils" seront des briques optionnelles (= les `@import` seront commentés par défaut).


```scss

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
@import "components/button";
@import "components/burger";

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