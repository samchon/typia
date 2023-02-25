import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_ArrayMatrix = _test_validateParse("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<ArrayMatrix>> => { const validate = (input: any): typia.IValidation<ArrayMatrix> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayMatrix => {
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
        })) && elem.map((elem: any, _index3: number) => "number" === typeof elem || $report(true, {
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
    } as typia.IValidation<ArrayMatrix>;
}; input = JSON.parse(input); const output = validate(input); return output; })(input), ArrayMatrix.SPOILERS);
