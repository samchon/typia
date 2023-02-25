import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_ObjectSimple = _test_validatePrune("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): typia.IValidation<IBox3D> => { const validate = (input: any): typia.IValidation<IBox3D> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
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
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), ObjectSimple.SPOILERS);
