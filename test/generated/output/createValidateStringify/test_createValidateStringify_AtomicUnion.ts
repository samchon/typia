import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_AtomicUnion = _test_validateStringify("AtomicUnion", AtomicUnion.generate, (input: AtomicUnion): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<AtomicUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is AtomicUnion => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        })) && input.map((elem: any, _index1: number) => "string" === typeof elem || "number" === typeof elem && !Number.isNaN(elem) || "boolean" === typeof elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(boolean | number | string)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(boolean | number | string)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<AtomicUnion>;
}; const stringify = (input: AtomicUnion): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $throws = (typia.createValidateStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return elem;
        if ("boolean" === typeof elem)
            return elem;
        $throws({
            expected: "(boolean | number | string)",
            value: elem
        });
    })()).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, AtomicUnion.SPOILERS);
