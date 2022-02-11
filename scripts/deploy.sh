#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin https://github.com/Wind2Song/morney-1-website.git &&
git branch -M main &&
git config http.sslVerify "false" &&
git config --global http.sslVerify "false" &&
git config --global --unset https.proxy &&
git push -u origin main -f 
cd -