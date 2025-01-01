#!/bin/bash
set -e
git add .
git commit -m "Bash Script Commit"
git pull origin main --rebase # in case direct commits were made on GitHub
git push origin main
