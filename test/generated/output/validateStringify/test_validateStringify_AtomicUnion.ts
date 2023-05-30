import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_validateStringify_AtomicUnion = _test_validateStringify("AtomicUnion", AtomicUnion.generate, (input) => ((input: Array<AtomicUnion.Union>): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Array<AtomicUnion.Union>> => {
    const __is = (input: any): input is Array<AtomicUnion.Union> => {
        return Array.isArray(input) && input.every((elem: any) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem);
    };
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<AtomicUnion.Union> => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "Array<(boolean | null | number | string)>",
                value: input
            })) && input.map((elem: any, _index1: number) => null === elem || "string" === typeof elem || "number" === typeof elem && Number.isFinite(elem) || "boolean" === typeof elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(boolean | null | number | string)",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<(boolean | null | number | string)>",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const stringify = (input: Array<AtomicUnion.Union>): string => {
    const $string = (typia.validateStringify as any).string;
    const $number = (typia.validateStringify as any).number;
    const $throws = (typia.validateStringify as any).throws;
    return `[${input.map((elem: any) => null !== elem ? (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return $number(elem);
        if ("boolean" === typeof elem)
            return elem;
        $throws({
            expected: "(boolean | null | number | string)",
            value: elem
        });
    })() : "null").join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), AtomicUnion.SPOILERS);
