import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ObjectSimple = _test_validateClone("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<IBox3D>> => { const validate = (input: any): typia.IValidation<IBox3D> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is IBox3D => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.scale && null !== input.scale || $report(_exceptionable, {
                path: _path + ".scale",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.scale
            })) && $vo1(input.scale, _path + ".scale", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".scale",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.scale
            }), ("object" === typeof input.position && null !== input.position || $report(_exceptionable, {
                path: _path + ".position",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.position
            })) && $vo1(input.position, _path + ".position", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".position",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.position
            }), ("object" === typeof input.rotate && null !== input.rotate || $report(_exceptionable, {
                path: _path + ".rotate",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.rotate
            })) && $vo1(input.rotate, _path + ".rotate", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".rotate",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.rotate
            }), ("object" === typeof input.pivot && null !== input.pivot || $report(_exceptionable, {
                path: _path + ".pivot",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.pivot
            })) && $vo1(input.pivot, _path + ".pivot", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".pivot",
                expected: "Resolve<ObjectSimple.IPoint3D>",
                value: input.pivot
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.x && !Number.isNaN(input.x) || $report(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            }), "number" === typeof input.y && !Number.isNaN(input.y) || $report(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            }), "number" === typeof input.z && !Number.isNaN(input.z) || $report(_exceptionable, {
                path: _path + ".z",
                expected: "number",
                value: input.z
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectSimple.IBox3D>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectSimple.IBox3D>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<IBox3D>;
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
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectSimple.SPOILERS);
