# Development

## Building and Running individual Docker files locally without

- $ npm run build
- $ docker build -f Dockerfile-node -t cra-express-node:dev .
- $ docker run -it -p 4001:3001 cra-express-node:dev
- see container running at: http://localhost:4001
- $ docker build -f Dockerfile-nginx -t nginx-proxy:dev .
- $ docker run -it -p 81:80 nginx-proxy:dev
- see container running at: http://localhost:81

## Building and Running compose-locally.yaml locally

- $ docker compose -f compose-local.yaml up --build
- see nginx image running at: http://localhost:81
- see node image running at: http://localhost:4001

## Building and Running compose-prod.yaml

## ssh in to the project's digitalocean droplet

- $ ssh root@137.184.6.194

## tutorial resources

- https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b

## Dockerfile and docker compose.yaml command reference

- https://docs.docker.com/engine/reference/builder/
