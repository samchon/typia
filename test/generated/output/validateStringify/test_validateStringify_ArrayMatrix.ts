import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_validateStringify_ArrayMatrix = _test_validateStringify("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: Array<Array<Array<number>>>): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Array<Array<Array<number>>>> => {
    const __is = (input: any): input is Array<Array<Array<number>>> => {
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
    };
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<Array<Array<number>>> => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<Array<Array<number>>>",
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
                expected: "Array<Array<Array<number>>>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: Array<Array<Array<number>>>): string => {
    const $number = (typia.validateStringify as any).number;
    return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => $number(elem)).join(",")}]`).join(",")}]`).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ArrayMatrix.SPOILERS);
