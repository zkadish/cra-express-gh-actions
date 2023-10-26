# Development

## Running with Docker locally without nginx

- $ npm run build
- $ docker build -f Dockerfile-node -t cra-express-gh-actions-node:dev . 
- $ docker run -it -p 4001:3001 cra-express-gh-actions-node:dev
- see container running at: http://localhost:4001
- $ docker build -f Dockerfile-nginx -t cra-express-gh-actions-nginx:dev .
- $ docker run -it -p 81:80 cra-express-gh-actions-nginx:dev
- see container running at: http://localhost:81
