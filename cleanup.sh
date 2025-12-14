#!/bin/bash

# Remove unnecessary documentation files
rm -f ARCHITECTURE.md
rm -f AUTHENTICATION_SETUP.md
rm -f DEPLOYMENT_GUIDE.md
rm -f ESSENTIAL_CHECKLIST.md
rm -f FIREBASE_SETUP.md
rm -f FIXES_AND_FEATURES.md
rm -f IMPLEMENTATION_COMPLETE.md
rm -f PROJECT_SUMMARY.md
rm -f QUICKSTART.md
rm -f UPDATES_SUMMARY.md
rm -f README_IMPLEMENTATION.md

# Remove Figma demo folder if it exists
rm -rf src/components/figma

# Reinstall dependencies (clean install)
rm -rf node_modules
rm -f package-lock.json
npm install

echo "✅ Cleanup complete! Project is now clean and production-ready."
echo "📦 Remaining documentation:"
echo "  - README.md"
echo "  - PRODUCTION_READY.md"
echo "  - FINAL_SETUP_GUIDE.md"
