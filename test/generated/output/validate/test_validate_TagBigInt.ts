import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_TagBigInt = _test_validate("TagBigInt", TagBigInt.generate, (input) => ((input: any): typia.IValidation<TagBigInt> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagBigInt => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["bigint" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "bigint",
                value: input.value
            }), "bigint" === typeof input.ranged && 0n <= input.ranged && 100n >= input.ranged || $report(_exceptionable, {
                path: _path + ".ranged",
                expected: "bigint",
                value: input.ranged
            }), "bigint" === typeof input.minimum && 0n <= input.minimum || $report(_exceptionable, {
                path: _path + ".minimum",
                expected: "bigint",
                value: input.minimum
            }), "bigint" === typeof input.maximum && 100n >= input.maximum || $report(_exceptionable, {
                path: _path + ".maximum",
                expected: "bigint",
                value: input.maximum
            }), "bigint" === typeof input.multipleOf && 0n === input.multipleOf % 3n || $report(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "bigint",
                value: input.multipleOf
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<TagBigInt>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<TagBigInt>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagBigInt>;
})(input), TagBigInt.SPOILERS);
