import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { DefinitionArrayRecursiveRequired } from "../../../structures/DefinitionArrayRecursiveRequired";
export const test_createValidate_DefinitionArrayRecursiveRequired = _test_validate("DefinitionArrayRecursiveRequired", DefinitionArrayRecursiveRequired.generate, (input: any): typia.IValidation<DefinitionArrayRecursiveRequired> => {
    const __is = (input: any): input is DefinitionArrayRecursiveRequired => {
        const $id0 = (input: any): any => null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)));
        return null !== input && undefined !== input && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && $id0(elem)) || $id0(input));
    };
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DefinitionArrayRecursiveRequired => {
            const $vd0 = (input: any, _path: string, _exceptionable: boolean = true): any => (null !== input || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && (undefined !== input || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            })) && input.map((elem: any, _index2: number) => (null !== elem || $report(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && (undefined !== elem || $report(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && ($vd0(elem, _path + "[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + "[" + _index2 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            }))).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path,
                expected: "(Array<DefinitionArrayRecursiveRequired> | number | string)",
                value: input
            }));
            return (null !== input || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && (undefined !== input || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && ("string" === typeof input || "number" === typeof input && Number.isFinite(input) || (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            })) && input.map((elem: any, _index1: number) => (null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && (undefined !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            })) && ($vd0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "DefinitionArrayRecursiveRequired",
                value: elem
            }))).every((flag: boolean) => flag) || $vd0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "(Array<DefinitionArrayRecursiveRequired> | DefinitionArrayRecursiveRequired | number | string)",
                value: input
            }));
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}, DefinitionArrayRecursiveRequired.SPOILERS);
