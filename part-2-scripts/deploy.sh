#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v21.6.2/bin/

cd finaldev
sudo git pull origin main

 cd server
/home/ubuntu/.nvm/versions/node/v21.6.2/bin/pm2 kill
/home/ubuntu/.nvm/versions/node/v21.6.2/bin/pm2 start index.js
