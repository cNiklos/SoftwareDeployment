## Lab4

```sh
kubectl apply -k ./
```
Applies the kustomization.yaml file, deploying the wordpress site, the mysql database and creates a secret for the password.

```sh
kubectl delete -k ./
```
Deletes all the resources associated with the file.

```sh
minikube service wordpress --url
```
Creates a connection to the wordpress service
