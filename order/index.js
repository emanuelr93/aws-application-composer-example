const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const order = JSON.parse(event.Records[0].body);

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: order,
    };

    await dynamoDB.put(params).promise();
};