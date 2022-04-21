import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class CdkReactAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    // Creates a CodeCommit repository called 'WorkshopRepo'
    new codecommit.Repository(this, 'WorkshopRepo', {
      repositoryName: "WorkshopRepo"
    });

    // const pipeline = new CodePipeline(this, 'Pipeline', {
    //   pipelineName: 'MyPipeline',
    //   synth: new ShellStep('Synth', {
    //     input: CodePipelineSource.gitHub('willsower/cdk-typescript-reactapp', 'main'),
    //     commands: ['npm ci', 'npm run build', 'npx cdk synth']
    //   })
    // });
  }
}