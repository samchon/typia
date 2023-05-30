import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ObjectSimple } from "../../../structures/ObjectSimple";
export const test_assertPrune_ObjectSimple = _test_assertPrune("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): ObjectSimple.IBox3D => { const assert = (input: any): ObjectSimple.IBox3D => {
    const $guard = (typia.assertPrune as any).guard;
    const __is = (input: any): input is ObjectSimple.IBox3D => {
        const $io0 = (input: any): boolean => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && Number.isFinite(input.scale.x) && ("number" === typeof input.scale.y && Number.isFinite(input.scale.y)) && ("number" === typeof input.scale.z && Number.isFinite(input.scale.z))) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && Number.isFinite(input.position.x) && ("number" === typeof input.position.y && Number.isFinite(input.position.y)) && ("number" === typeof input.position.z && Number.isFinite(input.position.z)))) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && Number.isFinite(input.rotate.x) && ("number" === typeof input.rotate.y && Number.isFinite(input.rotate.y)) && ("number" === typeof input.rotate.z && Number.isFinite(input.rotate.z)))) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && Number.isFinite(input.pivot.x) && ("number" === typeof input.pivot.y && Number.isFinite(input.pivot.y)) && ("number" === typeof input.pivot.z && Number.isFinite(input.pivot.z))));
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectSimple.IBox3D => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.scale && null !== input.scale || $guard(_exceptionable, {
                path: _path + ".scale",
                expected: "ObjectSimple.IPoint3D",
                value: input.scale
            })) && $ao1(input.scale, _path + ".scale", true && _exceptionable) && (("object" === typeof input.position && null !== input.position || $guard(_exceptionable, {
                path: _path + ".position",
                expected: "ObjectSimple.IPoint3D",
                value: input.position
            })) && $ao1(input.position, _path + ".position", true && _exceptionable)) && (("object" === typeof input.rotate && null !== input.rotate || $guard(_exceptionable, {
                path: _path + ".rotate",
                expected: "ObjectSimple.IPoint3D",
                value: input.rotate
            })) && $ao1(input.rotate, _path + ".rotate", true && _exceptionable)) && (("object" === typeof input.pivot && null !== input.pivot || $guard(_exceptionable, {
                path: _path + ".pivot",
                expected: "ObjectSimple.IPoint3D",
                value: input.pivot
            })) && $ao1(input.pivot, _path + ".pivot", true && _exceptionable));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.x && Number.isFinite(input.x) || $guard(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            })) && ("number" === typeof input.y && Number.isFinite(input.y) || $guard(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            })) && ("number" === typeof input.z && Number.isFinite(input.z) || $guard(_exceptionable, {
                path: _path + ".z",
                expected: "number",
                value: input.z
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectSimple.IBox3D",
                value: input
            })) && $ao0(input, _path + "", true);
        })(input, "$input", true);
    return input;
}; const prune = (input: ObjectSimple.IBox3D): void => {
    const $io1 = (input: any): boolean => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $po0 = (input: any): any => {
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
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key || "z" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), ObjectSimple.SPOILERS);
