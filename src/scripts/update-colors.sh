#!/bin/bash

# This script replaces the old emerald green color (#004d40) with the new teal color (#0097A7)
# and the darker emerald (#00695c) with a darker teal (#00ACC1) throughout the project

# Find all .tsx, .ts, .css files and replace colors
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.css" \) -exec sed -i '' \
  -e 's/#004d40/#0097A7/g' \
  -e 's/#00695c/#00ACC1/g' \
  -e 's/#00332a/#006064/g' \
  {} +

echo "Color replacement complete!"
echo "Old color #004d40 (emerald) -> New color #0097A7 (teal)"
echo "Old color #00695c (dark emerald) -> New color #00ACC1 (light teal)"
echo "Old color #00332a (very dark emerald) -> New color #006064 (dark teal)"
