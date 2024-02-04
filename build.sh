#!/usr/bin/env bash

echo Building Application for Github

# Build App
ng build --output-path docs --base-href /lugnano/

# Fix generated folder structure
mv docs/browser/* docs/
rm -r docs/browser

# Create 404 page for Github
cp docs/index.html docs/404.html

# Fix assets reference
STYLES_FILE=$(find docs -name 'styles*css')
sed -i '' 's/\/assets/\.\/assets/g' $STYLES_FILE