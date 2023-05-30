import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_assertStringify_DefinitionJsonValue = _test_assertStringify("DefinitionJsonValue", DefinitionJsonValue.generate, (input) => ((input: any): string => { const assert = (input: any): string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null => {
    const $guard = (typia.assertStringify as any).guard;
    const $join = (typia.assertStringify as any).join;
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
}; const stringify = (input: string | number | boolean | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonArray | null): string => {
    const $string = (typia.assertStringify as any).string;
    const $number = (typia.assertStringify as any).number;
    const $throws = (typia.assertStringify as any).throws;
    const $join = (typia.assertStringify as any).join;
    const $io0 = (input: any): boolean => Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        if (RegExp(/(.*)/).test(key))
            return null === value || undefined === value || "string" === typeof value || "number" === typeof value || "boolean" === typeof value || (Array.isArray(value) && value.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof value && null !== value && false === Array.isArray(value) && $io0(value));
        return true;
    });
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || "boolean" === typeof input || (Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input)));
    const $so0 = (input: any): any => `{${Object.entries(input).map(([key, value]: [string, any]) => { if (undefined === value)
        return ""; return `${JSON.stringify(key)}:${undefined !== value ? null !== value ? (() => {
        if ("string" === typeof value)
            return $string(value);
        if ("number" === typeof value)
            return $number(value);
        if ("boolean" === typeof value)
            return value;
        if (Array.isArray(value))
            return `[${value.map((elem: any) => $sd0(elem)).join(",")}]`;
        if ("object" === typeof value && null !== value && false === Array.isArray(value))
            return $so0(value);
        $throws({
            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string | undefined)",
            value: value
        });
    })() : "null" : undefined}`; }).filter(str => "" !== str).join(",")}}`;
    const $sd0 = (input: any): any => null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input);
        if ("boolean" === typeof input)
            return input;
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        if ("object" === typeof input && null !== input && false === Array.isArray(input))
            return $so0(input);
        $throws({
            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string)",
            value: input
        });
    })() : "null";
    return null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input).toString();
        if ("boolean" === typeof input)
            return input.toString();
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        if ("object" === typeof input && null !== input && false === Array.isArray(input))
            return $so0(input);
        if (true)
            return $sd0(input);
        $throws({
            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonValue | boolean | null | number | string)",
            value: input
        });
    })() : "null";
}; return stringify(assert(input)); })(input), DefinitionJsonValue.SPOILERS);
