import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

interface ISomething {
    boolean: boolean[];
    /**
     * @type int32
     */
    int32: number[];
    /**
     * @type uint32
     */
    uint32: number[];
    int64: bigint[];
    /**
     * @type uint64
     */
    uint64: bigint[];
    /**
     * @type float
     */
    float: number[];
    double: number[];
    string: string[];
    bytes: Uint8Array[];
    something: ISomething[];
}

const result: pjs.IParserResult = pjs.parse(
    typia.protobuf.message<ISomething>(),
);
const type: pjs.Type = result.root.lookupType("ISomething");

fs.writeFileSync(
    __dirname + "/protobuf.encode.array.js",
    [
        "//-------------------------------------------------",
        "// TYPIA",
        "//-------------------------------------------------",
        `const encode = ${typia.protobuf
            .createEncode<ISomething>()
            .toString()}`,
        "",
        "//-------------------------------------------------",
        "// GOOGLE",
        "//-------------------------------------------------",
        pjs.encoder(type).toString(),
    ].join("\n"),
    "utf8",
);
