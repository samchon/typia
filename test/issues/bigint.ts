import pjs from "protobufjs";
import typia from "typia";

interface ISomething {
    value: number;
}
const value: number = -45_123.57123;

const message = typia.protobuf.message<ISomething>();
const type = pjs.parse(message).root.lookupType("ISomething");

console.log({
    typia: Buffer.from(typia.protobuf.encode({ value: value })).toJSON(),
    google: Buffer.from(type.encode({ value }).finish()).toJSON(),
});
