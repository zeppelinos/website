aws s3 sync --exclude "deploy.sh" --exclude ".git/*" --exclude ".gitignore" --exclude "*/.gitkeep" $@ . s3://zeppelinos.org
