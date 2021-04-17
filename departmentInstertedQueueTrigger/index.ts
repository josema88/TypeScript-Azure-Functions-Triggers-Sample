import { AzureFunction, Context } from "@azure/functions"
import departmentService from "../services/departmentLog"

const queueTrigger: AzureFunction = async function (context: Context, myQueueItem: string): Promise<void> {
    context.log('Queue trigger function processed work item', myQueueItem);
    await departmentService.insertData(myQueueItem);
    context.log('Message inserted to Table Storage', myQueueItem);
};

export default queueTrigger;
