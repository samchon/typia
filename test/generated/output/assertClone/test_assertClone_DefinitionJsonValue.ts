import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_assertClone_DefinitionJsonValue = _test_assertClone("DefinitionJsonValue", DefinitionJsonValue.generate, (input) => ((input: any): typia.Primitive<string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null> => { const assert = (input: any): string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null => {
    const $guard = (typia.assertClone as any).guard;
    const $join = (typia.assertClone as any).join;
    const __is = (input: any): input is string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null => {
        const $io0 = (input: any): boolean => Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/(.*)/).test(key))
                return null === value || undefined === value || "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
            return true;
        });
        const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
        return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)) || $id0(input));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => false === _exceptionable || Object.keys(input).every(key => {
                const value = input[key];
                if (undefined === value)
                    return true;
                if (RegExp(/(.*)/).test(key))
                    return null === value || undefined === value || "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any, _index2: number) => (null !== elem || $guard(_exceptionable, {
                        path: _path + $join(key) + "[" + _index2 + "]",
                        expected: "DefinitionJsonValue.JsonValue",
                        value: elem
                    })) && (undefined !== elem || $guard(_exceptionable, {
                        path: _path + $join(key) + "[" + _index2 + "]",
                        expected: "DefinitionJsonValue.JsonValue",
                        value: elem
                    })) && $ad0(elem, _path + $join(key) + "[" + _index2 + "]", true && _exceptionable)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $ao0(value, _path + $join(key), true && _exceptionable));
                return true;
            });
            const $ad0 = (input: any, _path: string, _exceptionable: boolean = true): any => (undefined !== input || $guard(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any, _index3: number) => (null !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index3 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && (undefined !== elem || $guard(_exceptionable, {
                path: _path + "[" + _index3 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && $ad0(elem, _path + "[" + _index3 + "]", true && _exceptionable)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $ao0(input, _path, true && _exceptionable)));
            return (undefined !== input || $guard(true, {
                path: _path + "",
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonValue | boolean | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && (undefined !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && $ad0(elem, _path + "[" + _index1 + "]", true)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $ao0(input, _path + "", true)) || $ad0(input, _path + "", true));
        })(input, "$input", true);
    return input;
}; const clone = (input: string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null): typia.Primitive<string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null> => {
    const $join = (typia.assertClone as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
    const $co0 = (input: any): any => { const output = {} as any; for (const [key, value] of Object.entries(input)) {
        if (RegExp(/(.*)/).test(key)) {
            output[key] = Array.isArray(value) ? value.map((elem: any) => elem as any) : "object" === typeof value && null !== value ? $co0(value) : value as any;
            continue;
        }
    } return output; };
    const $cd0 = (input: any): any => Array.isArray(input) ? input.map((elem: any) => elem as any) : "object" === typeof input && null !== input ? $co0(input) : input as any;
    return Array.isArray(input) ? input.map((elem: any) => elem as any) : "object" === typeof input && null !== input ? $co0(input) : input as any;
}; assert(input); const output = clone(input); return output; })(input), DefinitionJsonValue.SPOILERS);
