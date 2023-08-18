import fs from "fs";
import pjs from "protobufjs";
import typia from "typia";

interface IBox3D {
    scalars: number[];
    additionals?: IPoint3D[];

    title: string;
    description: string | null;
    position: IPoint3D | null;
    size?: IPoint3D | undefined;
}
interface IPoint3D {
    /**
     * @type int64
     */
    x: Value;

    /**
     * @type int64
     */
    y: Value;

    /**
     * @type int64
     */
    z: Value;
}
type Value = number;

// TRACE ENCODE FUNCTION
const encode = typia.protobuf.createEncode<IBox3D>();

const result: pjs.IParserResult = pjs.parse(typia.protobuf.message<IBox3D>());
const type: pjs.Type = result.root.lookupType("IBox3D");

fs.writeFileSync(
    __dirname + "/protobuf.encode.js",
    [
        "//-------------------------------------------------",
        "// TYPIA",
        "//-------------------------------------------------",
        `const encode = ${encode.toString()}`,
        "",
        "//-------------------------------------------------",
        "// GOOGLE",
        "//-------------------------------------------------",
        pjs.encoder(type).toString(),
        pjs.encoder(result.root.lookupType("IPoint3D")).toString(),
    ].join("\n"),
    "utf8",
);

// GENERATE BINARY DATA
const value = -1;
const point: IPoint3D = {
    x: value,
    y: value,
    z: value,
};
const data: IBox3D = {
    scalars: [1, 1, 1],
    additionals: [point, point, point],
    position: point,
    size: point,
    title: "something",
    description: "A box containing something",
};

const expected: Uint8Array = encode(data);
const answer: Uint8Array = type.encode(data).finish();
console.log(
    expected.length,
    answer.length,
    expected.length === answer.length &&
        expected.every((e, i) => e === answer[i]),
);
