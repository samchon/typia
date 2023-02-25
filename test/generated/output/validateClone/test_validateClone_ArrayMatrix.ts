import typia from "../../../src";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ArrayMatrix = _test_validateClone("ArrayMatrix", ArrayMatrix.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ArrayMatrix>> => { const validate = (input: any): typia.IValidation<ArrayMatrix> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
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
        })) && elem.map((elem: any, _index3: number) => "number" === typeof elem && !Number.isNaN(elem) || $report(true, {
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
}; const clone = (input: ArrayMatrix): typia.Primitive<ArrayMatrix> => {
    return Array.isArray(input) ? input.map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => Array.isArray(elem) ? elem.map((elem: any) => elem) : elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ArrayMatrix.SPOILERS);
