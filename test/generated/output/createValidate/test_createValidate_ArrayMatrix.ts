import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_validate } from "../../../internal/_test_validate";
export const test_createValidate_ArrayMatrix = _test_validate("ArrayMatrix", ArrayMatrix.generate, (input: any): typia.IValidation<ArrayMatrix> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    const __is = (input: any): input is ArrayMatrix => {
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ArrayMatrix => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ArrayMatrix",
                value: input
            })) && input.map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<Array<number>>",
                value: elem
            })) && elem.map((elem: any, _index2: number) => (Array.isArray(elem) || $report(true, {
                path: _path + "[" + _index1 + "][" + _index2 + "]",
                expected: "Array<number>",
                value: elem
            })) && elem.map((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) || $report(true, {
                path: _path + "[" + _index1 + "][" + _index2 + "][" + _index3 + "]",
                expected: "number",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "[" + _index1 + "][" + _index2 + "]",
                expected: "Array<number>",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<Array<number>>",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "ArrayMatrix",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}, ArrayMatrix.SPOILERS);
