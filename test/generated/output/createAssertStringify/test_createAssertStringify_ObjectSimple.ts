import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectSimple = _test_assertStringify("ObjectSimple", ObjectSimple.generate, (input: IBox3D): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is IBox3D => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.scale && null !== input.scale || $guard(_exceptionable, {
            path: _path + ".scale",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.scale
        })) && $ao1(input.scale, _path + ".scale", true && _exceptionable) && (("object" === typeof input.position && null !== input.position || $guard(_exceptionable, {
            path: _path + ".position",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.position
        })) && $ao1(input.position, _path + ".position", true && _exceptionable)) && (("object" === typeof input.rotate && null !== input.rotate || $guard(_exceptionable, {
            path: _path + ".rotate",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.rotate
        })) && $ao1(input.rotate, _path + ".rotate", true && _exceptionable)) && (("object" === typeof input.pivot && null !== input.pivot || $guard(_exceptionable, {
            path: _path + ".pivot",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.pivot
        })) && $ao1(input.pivot, _path + ".pivot", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x && !Number.isNaN(input.x) || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y && !Number.isNaN(input.y) || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        })) && ("number" === typeof input.z && !Number.isNaN(input.z) || $guard(_exceptionable, {
            path: _path + ".z",
            expected: "number",
            value: input.z
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectSimple.IBox3D>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as IBox3D;
}; const stringify = (input: IBox3D): string => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $so0 = (input: any) => `{"scale":${`{"x":${input.scale.x},"y":${input.scale.y},"z":${input.scale.z}}`},"position":${`{"x":${input.position.x},"y":${input.position.y},"z":${input.position.z}}`},"rotate":${`{"x":${input.rotate.x},"y":${input.rotate.y},"z":${input.rotate.z}}`},"pivot":${`{"x":${input.pivot.x},"y":${input.pivot.y},"z":${input.pivot.z}}`}}`;
    return $so0(input);
}; return stringify(assert(input)); }, ObjectSimple.SPOILERS);
