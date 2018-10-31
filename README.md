This template supports the following features:

* Films
* TV Seasons
* Collections
* Pages
* Template only pages (robots.txt and sitemap.txt are examples)
* Internationalization

## Building

 * Install NPM modules - `npm i`
 * Start kibble - `npm start`
 * Make changes to scss or templates, the site will detect any changes and auto refresh.

 Some files will need to be manually modified to update site names, urls, etc.
 * package.json
 * kibble.json
 * site/manifest.json.jet

## Internationalisation (i18n)
If NZ is not your prefered language then you will need to create a copy of `site/en_NZ.all.json` and make a version for your specific language/locale.
`kibble.json` will then need to be updated with the new i18n file.