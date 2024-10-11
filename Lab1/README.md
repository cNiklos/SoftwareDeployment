# Deployment template

This folder contains a deployment template for deploying an Azure Storage Account and an Azure Web App (with associated service plan) using the provided parameters.

| Parameter   | Type   | Description                                                               | Default Value                                        |
|-------------|--------|---------------------------------------------------------------------------|------------------------------------------------------|
| storageName | string | Name of the storage account. Must be between 3 and 24 characters.         | Automatically generated using the resource group ID. |
| webAppName  | string | Name of the web app. Must be at least 2 characters long.                  | Automatically generated using the resource group ID. |
| location    | string | Location where resources are deployed.                                    | Inherits from the resource group location.           |
| sku         | string | The SKU (pricing tier) for the App Service Plan.                          | F1                                                   |
| language    | string | The runtime stack for the web app. Allowed values: .net, php, node, html. | node                                                 |
