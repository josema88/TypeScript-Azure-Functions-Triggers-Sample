import { TableClient, TablesSharedKeyCredential } from "@azure/data-tables"
import { v4 as uuidv4 } from 'uuid';

// Enter your storage account name and shared key
const account = process.env.TABLE_STORAGE_ACCOUNT_NAME;
const accountKey = process.env.TABLE_STORAGE_ACCOUNT_KEY;
const tableName = "departmentsInserted";

// Use TablesSharedKeyCredential with storage account and account key
// TablesSharedKeyCredential is only available in Node.js runtime, not in browsers
const credential = new TablesSharedKeyCredential(account, accountKey);
const client = new TableClient(
  `https://${account}.table.core.windows.net`,
  tableName,
  credential
);

async function insertData(message: string) {
    const messageEntity = {
        partitionKey: "P1",
        rowKey: uuidv4(),
        queueMessage: message
    }
    await client.createEntity(messageEntity);
}

export default { insertData }