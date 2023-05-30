import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_validatePrune_ArrayMatrix = _test_validatePrune("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: any): typia.IValidation<Array<Array<Array<number>>>> => { const validate = (input: any): typia.IValidation<Array<Array<Array<number>>>> => {
    const __is = (input: any): input is Array<Array<Array<number>>> => {
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => Array.isArray(elem) && elem.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))));
    };
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
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
}; const prune = (input: Array<Array<Array<number>>>): void => {
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), ArrayMatrix.SPOILERS);
