#!/bin/bash
cd /root/deca/init;
docker-compose up -d & sleep 10;
docker-compose down & sleep 5;
cd ..;
docker-compose up -d;
