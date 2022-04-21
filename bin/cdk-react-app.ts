#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkReactAppStack } from '../lib/cdk-react-app-stack';

const TEST_ACCOUNT = '502081401357';

const app = new cdk.App();
new CdkReactAppStack(app, 'CdkReactAppStack', {
    env: {
      account: TEST_ACCOUNT,
      region: 'us-east-1',
    }
});