FROM ruby:2-slim-bullseye as jekyll

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# install both bundler 1.x and 2.x incase you're running
# old gem files
# https://bundler.io/guides/bundler_2_upgrade.html#faq
RUN gem install bundler -v "~>1.0" && gem install bundler jekyll

# build from the image we just built with different metadata
FROM ghcr.io/bretfisher/jekyll:latest as jekyll-serve

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]