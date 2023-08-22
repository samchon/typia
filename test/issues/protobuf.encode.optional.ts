import pjs from "protobufjs";
import typia from "typia";

interface ISomething {
    value: string;
}

const type = pjs
    .parse(typia.protobuf.message<ISomething>())
    .root.lookupType("ISomething");
console.log(
    [
        typia.protobuf.encode<ISomething>({ value: "" }),
        type.encode({ value: "" }).finish(),
    ].map((b) => Buffer.from(b).toJSON()),
);
