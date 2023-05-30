import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_createAssertParse_DefinitionJsonValue = _test_assertParse("DefinitionJsonValue", DefinitionJsonValue.generate, (input: string): typia.Primitive<DefinitionJsonValue> => { const assert = (input: any): DefinitionJsonValue => {
    const $guard = (typia.createAssertParse as any).guard;
    const $join = (typia.createAssertParse as any).join;
    const __is = (input: any): input is DefinitionJsonValue => {
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
        ((input: any, _path: string, _exceptionable: boolean = true): input is DefinitionJsonValue => {
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
}; input = JSON.parse(input); return assert(input) as any; }, DefinitionJsonValue.SPOILERS);
