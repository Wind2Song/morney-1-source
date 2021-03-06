#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git config http.sslVerify "false" &&
git config --global http.sslVerify "false" &&
git config --global --unset https.proxy &&
git remote add origin git@github.com:Wind2Song/morney-1-website.git &&
git branch -M main &&
git push -u origin main -f 
cd -