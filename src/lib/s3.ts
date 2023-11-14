import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { randomBytes } from "crypto";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const region = "ap-south-1";
const bucketName = "dolanto";
const accessKeyId = "AKIAZ23OMSXY5DO7EJFP";
const secretAccessKey = "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";

const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function generateUploadLink(prevImgName: string) {
  const bytes = randomBytes(16);
  const newImageName = bytes.toString("hex");
  const prevImageName = decodeURIComponent(prevImgName);

  const putParams = {
    Bucket: bucketName,
    Key: newImageName,
  };
  const deleteParams = {
    Bucket: bucketName,
    Key: prevImageName,
  };
  await s3.send(new DeleteObjectCommand(deleteParams));

  const command = new PutObjectCommand(putParams);

  const uploadLink = await getSignedUrl(s3, command, { expiresIn: 60 });

  return uploadLink;
}
