tar -czvf backups/db_backup$(date +"%Y-%m-%d-%h-%M-%s").tar.gz .tmp/data.db
npx strapi build
npm run develop
