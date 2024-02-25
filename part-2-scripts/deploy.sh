#!/bin/bash

# Set the correct path to pm2
export PATH=$PATH:/home/ubuntu/.npm-global/bin

cd Week-5-with-axios-and-backend
git pull origin master
cd server

# Ensure pm2 is stopped before starting again
pm2 kill

# Start your application using pm2
pm2 start index.js
