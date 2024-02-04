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
sed -i -e 's/abc/XYZ/g' /tmp/file.txt