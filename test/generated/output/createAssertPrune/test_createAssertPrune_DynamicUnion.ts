import typia from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
export const test_createAssertPrune_DynamicUnion = _test_assertPrune("DynamicUnion", DynamicUnion.generate, (input: any): DynamicUnion => { const assert = (input: any): DynamicUnion => {
    const __is = (input: any): input is DynamicUnion => {
        const $join = (typia.createAssertPrune as any).join;
        const $io0 = (input: any): boolean => Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                return "string" === typeof value;
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value;
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value;
            if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                return "number" === typeof value && Number.isFinite(value);
            return true;
        });
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicUnion => {
            const $guard = (typia.createAssertPrune as any).guard;
            const $join = (typia.createAssertPrune as any).join;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/^-?\d+\.?\d*$/).test(key))
                    return "string" === typeof value || $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "string",
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
                if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                    return "number" === typeof value && Number.isFinite(value) || $guard(_exceptionable, {
                        path: _path + $join(key),
                        expected: "number",
                        value: value
                    });
                return true;
            });
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "DynamicUnion",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "DynamicUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const prune = (input: DynamicUnion): void => {
    const $join = (typia.createAssertPrune as any).join;
    const $po0 = (input: any): any => {
        Object.entries(input).forEach(([key, value]: any) => {
            if (undefined === value)
                return;
            if (RegExp(/^-?\d+\.?\d*$/).test(key)) { }
            if (RegExp(/^(prefix_(.*))/).test(key)) { }
            if (RegExp(/((.*)_postfix)$/).test(key)) { }
            if (RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key)) { }
        });
        for (const key of Object.keys(input)) {
            if (RegExp(/^-?\d+\.?\d*$/).test(key) || RegExp(/^(prefix_(.*))/).test(key) || RegExp(/((.*)_postfix)$/).test(key) || RegExp(/^(value_between_-?\d+\.?\d*_and_-?\d+\.?\d*)$/).test(key))
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; }, DynamicUnion.SPOILERS);
