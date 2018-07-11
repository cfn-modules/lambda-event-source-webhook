[![Build Status](https://travis-ci.org/cfn-modules/lambda-event-source-webhook.svg?branch=master)](https://travis-ci.org/cfn-modules/lambda-event-source-webhook)
[![NPM version](https://img.shields.io/npm/v/@cfn-modules/lambda-event-source-webhook.svg)](https://www.npmjs.com/package/@cfn-modules/lambda-event-source-webhook)

# cfn-modules: AWS Lambda event source: webhook

Webhook event source for AWS Lambda function with [alerting](https://www.npmjs.com/package/@cfn-modules/alerting).

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/lambda-event-source-webhook
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  EventSource:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        LambdaModule: !GetAtt 'Lambda.Outputs.StackName' # required
        AlertingModule: !GetAtt 'Alerting.Outputs.StackName' # optional
        HttpMethod: 'ANY' # optional
      TemplateURL: './node_modules/@cfn-modules/lambda-event-source-webhook/module.yml'
```

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>LambdaModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/lambda-function">lambda-function module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>HttpMethod</td>
      <td>The HTTP method that clients use to call this method</td>
      <td>ANY</td>
      <td>no</td>
      <td>[ANY, GET, HEAD, POST, PUT, DELETE, OPTIONS]</td>
    </tr>
  </tbody>
</table>
