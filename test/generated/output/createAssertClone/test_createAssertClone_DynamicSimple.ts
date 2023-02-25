import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_DynamicSimple = _test_assertClone("DynamicSimple", DynamicSimple.generate, (input: any): typia.Primitive<DynamicSimple> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    const $join = (typia.createAssertClone as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicSimple => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return "number" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            return true;
        });
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicSimple>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicSimple;
}; const clone = (input: DynamicSimple): typia.Primitive<DynamicSimple> => {
    const $join = (typia.createAssertClone as any).join;
    const $co0 = (input: any) => { const output = {}; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* DynamicSimple */; return output as DynamicSimple; }, DynamicSimple.SPOILERS);
