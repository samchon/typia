import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { DefinitionJsonValue } from "../../../structures/DefinitionJsonValue";
export const test_createValidateStringify_DefinitionJsonValue = _test_validateStringify("DefinitionJsonValue", DefinitionJsonValue.generate, (input: DefinitionJsonValue): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DefinitionJsonValue> => {
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
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    const $join = (typia.createValidateStringify as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DefinitionJsonValue => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [false === _exceptionable || Object.keys(input).map(key => {
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    if (RegExp(/(.*)/).test(key))
                        return null === value || undefined === value || "string" === typeof value || "number" === typeof value && Number.isFinite(value) || "boolean" === typeof value || (Array.isArray(value) && value.map((elem: any, _index2: number) => (null !== elem || $report(_exceptionable, {
                            path: _path + $join(key) + "[" + _index2 + "]",
                            expected: "DefinitionJsonValue.JsonValue",
                            value: elem
                        })) && (undefined !== elem || $report(_exceptionable, {
                            path: _path + $join(key) + "[" + _index2 + "]",
                            expected: "DefinitionJsonValue.JsonValue",
                            value: elem
                        })) && ($vd0(elem, _path + $join(key) + "[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                            path: _path + $join(key) + "[" + _index2 + "]",
                            expected: "DefinitionJsonValue.JsonValue",
                            value: elem
                        }))).every((flag: boolean) => flag) || "object" === typeof value && null !== value && false === Array.isArray(value) && $vo0(value, _path + $join(key), true && _exceptionable) || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string | undefined)",
                            value: value
                        })) || $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string | undefined)",
                            value: value
                        });
                    return true;
                }).every((flag: boolean) => flag)].every((flag: boolean) => flag);
            const $vd0 = (input: any, _path: string, _exceptionable: boolean = true): any => (undefined !== input || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.map((elem: any, _index3: number) => (null !== elem || $report(_exceptionable, {
                path: _path + "[" + _index3 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && (undefined !== elem || $report(_exceptionable, {
                path: _path + "[" + _index3 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && ($vd0(elem, _path + "[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + "[" + _index3 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            }))).every((flag: boolean) => flag) || "object" === typeof input && null !== input && false === Array.isArray(input) && $vo0(input, _path, true && _exceptionable) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string)",
                value: input
            })) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | boolean | null | number | string)",
                value: input
            }));
            return (undefined !== input || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonValue | boolean | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || "boolean" === typeof input || (Array.isArray(input) && input.map((elem: any, _index1: number) => (null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && (undefined !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            })) && ($vd0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionJsonValue.JsonValue",
                value: elem
            }))).every((flag: boolean) => flag) || "object" === typeof input && null !== input && false === Array.isArray(input) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonValue | boolean | null | number | string)",
                value: input
            })) || $vd0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionJsonValue.JsonValue> | DefinitionJsonValue.JsonObject | DefinitionJsonValue.JsonValue | boolean | null | number | string)",
                value: input
            }));
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: DefinitionJsonValue): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $number = (typia.createValidateStringify as any).number;
    const $throws = (typia.createValidateStringify as any).throws;
    const $join = (typia.createValidateStringify as any).join;
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
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, DefinitionJsonValue.SPOILERS);
