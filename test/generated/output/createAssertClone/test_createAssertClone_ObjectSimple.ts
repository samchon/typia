import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectSimple = _test_assertClone("ObjectSimple", ObjectSimple.generate, (input: any): typia.Primitive<IBox3D> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
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
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        })) && ("number" === typeof input.z || $guard(_exceptionable, {
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
}; const clone = (input: IBox3D): typia.Primitive<IBox3D> => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $co0 = (input: any) => ({
        scale: "object" === typeof input.scale && null !== input.scale ? $co1(input.scale) : input.scale,
        position: "object" === typeof input.position && null !== input.position ? $co1(input.position) : input.position,
        rotate: "object" === typeof input.rotate && null !== input.rotate ? $co1(input.rotate) : input.rotate,
        pivot: "object" === typeof input.pivot && null !== input.pivot ? $co1(input.pivot) : input.pivot
    });
    const $co1 = (input: any) => ({
        x: input.x,
        y: input.y,
        z: input.z
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectSimple.IBox3D */; return output as IBox3D; }, ObjectSimple.SPOILERS);
