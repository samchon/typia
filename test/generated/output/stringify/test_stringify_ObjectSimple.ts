import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ObjectSimple = _test_stringify("ObjectSimple", ObjectSimple.generate, (input) => ((input: IBox3D): string => {
    const $number = (typia.stringify as any).number;
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $so0 = (input: any) => `{"scale":${`{"x":${$number(input.scale.x)},"y":${$number(input.scale.y)},"z":${$number(input.scale.z)}}`},"position":${`{"x":${$number(input.position.x)},"y":${$number(input.position.y)},"z":${$number(input.position.z)}}`},"rotate":${`{"x":${$number(input.rotate.x)},"y":${$number(input.rotate.y)},"z":${$number(input.rotate.z)}}`},"pivot":${`{"x":${$number(input.pivot.x)},"y":${$number(input.pivot.y)},"z":${$number(input.pivot.z)}}`}}`;
    return $so0(input);
})(input));
