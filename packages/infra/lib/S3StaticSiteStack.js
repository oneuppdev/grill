const { Stack, RemovalPolicy } = require('aws-cdk-lib');
const {
  Bucket,
  BucketAccessControl,
  BlockPublicAccess,
} = require('aws-cdk-lib/aws-s3');
const {
  Distribution,
  OriginAccessIdentity,
  PriceClass,
} = require('aws-cdk-lib/aws-cloudfront');
const { S3Origin } = require('aws-cdk-lib/aws-cloudfront-origins');

class S3StaticSiteStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const oai = new OriginAccessIdentity(this, `${props.id}-oai`, {
      comment: `Allows access to ${props.id}-site`,
    });

    const bucket = new Bucket(this, `${props.id}-site`, {
      accessControl: BucketAccessControl.PRIVATE,
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new Distribution(this, `${props.id}-distro`, {
      defaultBehavior: {
        origin: new S3Origin(bucket, { originAccessIdentity: oai }),
        compress: true,
      },
      defaultRootObject: 'index.html',
      priceClass: PriceClass.PRICE_CLASS_100,
    });
  }
}

module.exports = { S3StaticSiteStack };
