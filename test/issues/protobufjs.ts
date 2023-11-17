import pjs from "protobufjs";
import typia from "typia";

interface ISomething {
  values: number[];
}

const result: pjs.IParserResult = pjs.parse(
  typia.protobuf.message<ISomething>(),
);
const typeList: pjs.Type[] = result.root.nestedArray
  .filter((nested) => nested instanceof pjs.Type)
  .map((nested) => nested as pjs.Type);

const script: string = [
  "//---------------------------------------------------------",
  "// ENCODER",
  "//---------------------------------------------------------",
  ...typeList.map((type) => pjs.encoder(type).toString()),
  "",
  "//---------------------------------------------------------",
  "// DECODER",
  "//---------------------------------------------------------",
  ...typeList.map((type) => pjs.decoder(type).toString()),
].join("\n");
console.log(script);
