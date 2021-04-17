# TypeScript Azure Functions with Azure Core Tools

This repo contains a sample project created with Azure Core Tools and Visual Studio Code.

## Requirements

- [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
- [Download and install Node.js](https://nodejs.org/es/download/)
- [Install TypeScript](https://www.typescriptlang.org/download)
- [Install Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- [Install Visual Studio Code](https://code.visualstudio.com/)
- [Install Azure Functions VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

## Functions Project

This project contains an Azure Function triggered by an Azure Queue . In order to run the project in your machine you must add configurations in a file called **local.settings.json**.

Be sure that in your local environment you have the fille local.settings.json. Within that file you should add the connection string, like this sample:

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<FUNCTION_HOST_STORAGE_ACCOUNT_CONN_STRING>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "storageaccountname_STORAGE": "<QUEUE_BINDED_STORAGE_ACCOUNT_CONN_STRING>",
    "TABLE_STORAGE_ACCOUNT_NAME": "<TABLE_STORAGE_ACCOUNT_NAME>",
    "TABLE_STORAGE_ACCOUNT_KEY": "<TABLE_STORAGE_ACCOUNT_KEY>"
  }
}
```

### Run the project

You can run the project with VS Code. Open the folder with VS Code, go to options panel at the top and click in "Run" then you can select "Start debugging" or "Run without debugging".

## Create Function App and Deploy your Azure function

In order to run your Function in the cloud, you should create an Azure Function App instance. You can create it within Visual Studio code using the Azure Functions plugin.

Once your Function App instance is created, now you can deploy it with Visual Studio Code using the Azure Functions plugin.

For more information you can check the [official documentation](https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=csharp)

### Configurations after deployment to Azure Function

Go to your Azure App Function in Azure and add some environment variable at the instance's Settings -> Configuration -> Application settings.

| Name   |      Value      |
|----------|:-------------:|
| AzureWebJobsStorage | <FUNCTION_HOST_STORAGE_ACCOUNT_CONN_STRING> |
| storageaccountname_STORAGE | <QUEUE_BINDED_STORAGE_ACCOUNT_CONN_STRING> |
| TABLE_STORAGE_ACCOUNT_NAME | <TABLE_STORAGE_ACCOUNT_NAME> |
| TABLE_STORAGE_ACCOUNT_KEY | <TABLE_STORAGE_ACCOUNT_KEY> |

After add those configurations, save changes. Now your Azure Function will be executed as expected.
