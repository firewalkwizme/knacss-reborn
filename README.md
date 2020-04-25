# KNACSS

Reborn!

# TODO

TOUTSIMPLIFIER!


# Todo List

## knacss.scss

KNACSS de base est constitué uniquement des fichiers "Core".

Les fichiers "Utils" seront des briques optionnelles.


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

## Core (indispensable)
- Variables natives (= celles qu'on peut utiliser en CSS pur)  --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/abstracts/_variables-native.scss)
- Reset Base  --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/base/_reset-base.scss)
- Reset Forms --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/base/_reset-forms.scss)
- Reset Accessibility --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/base/_reset-accessibility.scss)
- Reset Print --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/base/_reset-print.scss)

## Core Components (indispensable)
- Select --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/components/_select.scss)
- Radio --> OK (cf. https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/components/_radio.scss)
- Checkbox --> OK (cf. https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/components/_checkbox.scss)
- Switch --> OK (https://github.com/raphaelgoetter/knacss-reborn/blob/master/sass/components/_switch.scss)
- Buttons
- Skip-links (liens d'évitement)
- Burger Button (nécessite JS pour le touch)

## Utils Components (complémentaire)
- Citations (cf. https://www.knacss.com/doc.html#citations)
- Tables (UI basique de tableau. cf. https://www.knacss.com/doc.html#tableaux)
- Alerts (boîte d'information. cf. https://www.knacss.com/doc.html#alertes)
- Tags (étiquette. cf. https://www.knacss.com/doc.html#tags)
- Badges (truc arrondi de la taille du texte. cf. https://www.knacss.com/doc.html#tags)
- Tabs (onglets, nécessite du JS. cf. https://www.knacss.com/doc.html#tabs)
- Arrows (flèches. cf. https://www.knacss.com/doc.html#arrows)

## Utilities (complémentaire)
- Responsive (ex. `.large-hidden` `.medium-w25` `.medium-ma0` etc.)
- Utils global (ex. `.u-italic` `.txtcenter` `.clearfix`  etc.)
- Utils spacers (ex. `.pts` `.mt0` etc.)
- Grillade (indispensable ? complémentaire ?)

## Delete (à supprimer)

- Layout (que des classes flexbox. ex. `.flex-container` `.item-fluid` etc.)
- Grillade version flexbox
- wordpress
- Utilities width (ex. `.w20` etc.)