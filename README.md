# Trophē

## Docker
Docker est un outil permettant de créer, déployer et exécuter des applications dans des conteneurs. Les conteneurs sont légers et portables, ce qui facilite le déploiement d'applications sur différentes plateformes.

### Commandes Docker
- `docker ps` : Affiche la liste des conteneurs en cours d'exécution.
- `docker build` : Construit une image Docker à partir d'un Dockerfile.
- `docker run` : Lance un nouveau conteneur à partir d'une image Docker.
- `docker stop` : Arrête un conteneur en cours d'exécution.

## Développement
Pour générer l'environnement de développement en local, exécutez les commandes suivantes :
```sh
docker build -f Dockerfile.dev -t trophe_dev .
docker run -p 3000:3000 trophe_dev
```
Pour arrêter les processus, utilisez la commande :
```
docker stop <container_id>
docker stop $(docker ps -q)
```

## Build / Production
Lors du build, le site est mis à jour automatiquement. Pour construire l'application pour la production, utilisez la commande suivante :

```
docker build -f Dockerfile.build -t trophe_build \
  --build-arg GIT_REPO="github.com/Hugo-SEQUIER/trophe.git" \
  --build-arg GIT_BRANCH=site \
  --build-arg GIT_USERNAME="name" \
  --build-arg GIT_TOKEN="token" \
  --build-arg GIT_EMAIL="email"
```