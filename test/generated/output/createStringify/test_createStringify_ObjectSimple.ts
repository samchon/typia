import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectSimple = _test_stringify("ObjectSimple", ObjectSimple.generate, (input: IBox3D): string => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $so0 = (input: any) => `{"scale":${`{"x":${input.scale.x},"y":${input.scale.y},"z":${input.scale.z}}`},"position":${`{"x":${input.position.x},"y":${input.position.y},"z":${input.position.z}}`},"rotate":${`{"x":${input.rotate.x},"y":${input.rotate.y},"z":${input.rotate.z}}`},"pivot":${`{"x":${input.pivot.x},"y":${input.pivot.y},"z":${input.pivot.z}}`}}`;
    return $so0(input);
});
