import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_TagObjectUnion = _test_validateStringify("TagObjectUnion", TagObjectUnion.generate, (input) => ((input: TagObjectUnion): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<TagObjectUnion> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagObjectUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.value && !Number.isNaN(input.value) && 3 <= input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("number" === typeof input.value)
                return $vo0(input, _path, true && _exceptionable);
            if ("string" === typeof input.value)
                return $vo1(input, _path, true && _exceptionable);
            return $report(_exceptionable, {
                path: _path,
                expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                value: input
            });
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<TagObjectUnion.Literal> | Resolve<TagObjectUnion.Numeric>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagObjectUnion>;
}; const stringify = (input: TagObjectUnion): string => {
    const $string = (typia.validateStringify as any).string;
    const $throws = (typia.validateStringify as any).throws;
    const $io0 = (input: any) => "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length;
    const $iu0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $io0(input);
        if ("string" === typeof input.value)
            return $io1(input);
        return false;
    })();
    const $so0 = (input: any) => `{"value":${input.value}}`;
    const $so1 = (input: any) => `{"value":${$string(input.value)}}`;
    const $su0 = (input: any) => (() => {
        if ("number" === typeof input.value)
            return $so0(input);
        if ("string" === typeof input.value)
            return $so1(input);
        $throws({
            expected: "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
            value: input
        });
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), TagObjectUnion.SPOILERS);
