import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { DefinitionArrayRecursiveNullable } from "../../../structures/DefinitionArrayRecursiveNullable";
export const test_validateClone_DefinitionArrayRecursiveNullable = _test_validateClone("DefinitionArrayRecursiveNullable", DefinitionArrayRecursiveNullable.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<string | number | Array<DefinitionArrayRecursiveNullable> | null>> => { const validate = (input: any): typia.IValidation<string | number | Array<DefinitionArrayRecursiveNullable> | null> => {
    const __is = (input: any): input is string | number | Array<DefinitionArrayRecursiveNullable> | null => {
        const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
        return undefined !== input && (null === input || "string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
    };
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is string | number | Array<DefinitionArrayRecursiveNullable> | null => {
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
}; const clone = (input: string | number | Array<DefinitionArrayRecursiveNullable> | null): typia.Primitive<string | number | Array<DefinitionArrayRecursiveNullable> | null> => {
    const $id0 = (input: any): any => undefined !== input && (null === input || "string" === typeof input || "number" === typeof input || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
    const $cd0 = (input: any): any => Array.isArray(input) ? input.map((elem: any) => elem as any) : input as any;
    return Array.isArray(input) ? input.map((elem: any) => elem as any) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), DefinitionArrayRecursiveNullable.SPOILERS);
