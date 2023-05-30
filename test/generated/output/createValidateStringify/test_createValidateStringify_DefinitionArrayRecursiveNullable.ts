import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_createValidateStringify_DefinitionArrayRecursiveNullable = _test_validateStringify("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input: DefinitionArrayRecursiveNullable): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<DefinitionArrayRecursiveNullable> => {
    const __is = (input: any): input is DefinitionArrayRecursiveNullable => {
        const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
        return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
    };
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DefinitionArrayRecursiveNullable => {
            const $vd0 = (input: any, _path: string, _exceptionable: boolean = true): any => (undefined !== input || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
                value: input
            })) && input.map((elem: any, _index2: number) => (null !== elem || $report(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && (undefined !== elem || $report(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && ($vd0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            }))).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
                value: input
            }));
            return (undefined !== input || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
                value: input
            })) && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
                value: input
            })) && input.map((elem: any, _index1: number) => (null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && (undefined !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            })) && ($vd0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveNullable",
                value: elem
            }))).every((flag: boolean) => flag) || $vd0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
                value: input
            }));
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: DefinitionArrayRecursiveNullable): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $number = (typia.createValidateStringify as any).number;
    const $throws = (typia.createValidateStringify as any).throws;
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    const $sd0 = (input: any): any => null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input);
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        $throws({
            expected: "(Array<DefinitionArrayRecursiveNullable> | null | number | string)",
            value: input
        });
    })() : "null";
    return null !== input ? (() => {
        if ("string" === typeof input)
            return $string(input);
        if ("number" === typeof input)
            return $number(input).toString();
        if (Array.isArray(input))
            return `[${input.map((elem: any) => $sd0(elem)).join(",")}]`;
        if (true)
            return $sd0(input);
        $throws({
            expected: "(Array<DefinitionArrayRecursiveNullable> | DefinitionArrayRecursiveNullable | null | number | string)",
            value: input
        });
    })() : "null";
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, DefinitionArrayRecursiveNullable.SPOILERS);
