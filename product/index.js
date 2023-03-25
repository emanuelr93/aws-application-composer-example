const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const products = JSON.parse(event.Records[0].body);

    for (const product of products) {
        const params = {
            TableName: process.env.TABLE_NAME,
            Item: product,
        };

        await dynamoDB.put(params).promise();
    }
};