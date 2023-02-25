import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_DynamicComposite = _test_assertClone("DynamicComposite", DynamicComposite.generate, (input: any): typia.Primitive<DynamicComposite> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    const $join = (typia.createAssertClone as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicComposite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                return "number" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                return "string" === typeof value || "number" === typeof value || "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "(boolean | number | string)",
                    value: value
                });
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                return "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value
                });
            return true;
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicComposite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicComposite;
}; const clone = (input: DynamicComposite): typia.Primitive<DynamicComposite> => {
    const $join = (typia.createAssertClone as any).join;
    const $co0 = (input: any) => { const output = {
        id: input.id,
        name: input.name
    }; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/^-?\d+\.?\d*$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(prefix_(.*))/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/((.*)_postfix)$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value;
            continue;
        }
        if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)) {
            output[key] = value;
            continue;
        }
    } return output; };
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* DynamicComposite */; return output as DynamicComposite; }, DynamicComposite.SPOILERS);
