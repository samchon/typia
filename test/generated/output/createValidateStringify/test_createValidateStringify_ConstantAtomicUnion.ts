import typia from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ConstantAtomicUnion = _test_validateStringify("ConstantAtomicUnion", ConstantAtomicUnion.generate, (input: ConstantAtomicUnion): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ConstantAtomicUnion> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicUnion => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["key" === input.key || $report(_exceptionable, {
                path: _path + ".key",
                expected: "\"key\"",
                value: input.key
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        })) && input.map((elem: any, _index1: number) => false === elem || 1 === elem || 2 === elem || "three" === elem || "four" === elem || ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ConstantAtomicUnion>;
}; const stringify = (input: ConstantAtomicUnion): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $throws = (typia.createValidateStringify as any).throws;
    const $so0 = (input: any) => `{"key":${(() => {
        if ("string" === typeof input.key)
            return $string(input.key);
        if ("string" === typeof input.key)
            return "\"" + input.key + "\"";
        $throws({
            expected: "\"key\"",
            value: input.key
        });
    })()}}`;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("boolean" === typeof elem)
            return elem;
        if ("number" === typeof elem)
            return elem;
        if ("string" === typeof elem)
            return "\"" + elem + "\"";
        if ("object" === typeof elem && null !== elem)
            return $so0(elem);
        $throws({
            expected: "(\"four\" | \"three\" | 1 | 2 | Resolve<__type> | false)",
            value: elem
        });
    })()).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ConstantAtomicUnion.SPOILERS);
