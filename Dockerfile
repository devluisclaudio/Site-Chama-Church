FROM node:lts as dependencies
WORKDIR /var/www
COPY package.json ./
RUN yarn install 

FROM node:lts as builder
WORKDIR /var/www
COPY . .
COPY --from=dependencies /var/www/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /var/www
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /var/www/next.config.js ./
COPY --from=builder /var/www/public ./public
COPY --from=builder /var/www/.next ./.next
COPY --from=builder /var/www/node_modules ./node_modules
COPY --from=builder /var/www/package.json ./package.json

EXPOSE 80
CMD ["yarn", "start"]