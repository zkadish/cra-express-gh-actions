# Development

## Build and run the cra express node server image

- $ npm run build
- $ docker build -f Dockerfile-node -t cra-express-node:dev .
- $ docker run -it -p 4001:3001 cra-express-node:dev
- see container running at: http://localhost:4001

### Build and run the nginx server image

- $ docker build -f Dockerfile-nginx -t nginx-node-proxy:dev .
- $ docker run -it -p 81:80 nginx-node-proxy:dev
- see container running at: http://localhost:81

## Building and Running compose-locally.yaml locally

- $ docker compose -f compose-local.yaml up --build
- see nginx image running at: http://localhost:81
- see node image running at: http://localhost:4001

## Building and Running compose-prod.yaml

- $ docker compose -f compose-prod.yaml up --build

## ssh in to the project's digitalocean droplet

- $ ssh root@137.184.6.194


## Dockerfile and docker compose.yaml command reference

- https://docs.docker.com/engine/reference/builder/

## tutorial resources

- https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b

- use the following tutorial to connect github to digitalocean with ssh
- https://medium.com/swlh/how-to-deploy-your-application-to-digital-ocean-using-github-actions-and-save-up-on-ci-cd-costs-74b7315facc2

- use to install docker on droplet
- https://blog.logrocket.com/zero-downtime-deploys-with-digitalocean-github-and-docker/

- create a manual workflow/action
- https://wttech.blog/blog/2021/how-to-push-docker-image-to-digitalocean-container-registry-using-github-actions/

- https://devpress.csdn.net/cicd/62ec1cc319c509286f416470.html#devmenu6
- https://blog.logrocket.com/zero-downtime-deploys-with-digitalocean-github-and-docker/
- https://medium.com/swlh/how-to-deploy-your-application-to-digital-ocean-using-github-actions-and-save-up-on-ci-cd-costs-74b7315facc2
- https://blog.nodeswat.com/set-up-a-secure-node-js-web-application-9256b8790f11

## Useful Docker commands

- https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes
  