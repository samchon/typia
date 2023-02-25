import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_ObjectSimple = _test_assertPrune("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): IBox3D => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
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
}; const prune = (input: IBox3D): void => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $po0 = (input: any) => {
        if ("object" === typeof input.scale && null !== input.scale)
            $po1(input.scale);
        if ("object" === typeof input.position && null !== input.position)
            $po1(input.position);
        if ("object" === typeof input.rotate && null !== input.rotate)
            $po1(input.rotate);
        if ("object" === typeof input.pivot && null !== input.pivot)
            $po1(input.pivot);
        for (const key of Object.keys(input)) {
            if ("scale" === key || "position" === key || "rotate" === key || "pivot" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key || "z" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), ObjectSimple.SPOILERS);
