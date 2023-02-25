import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_TagBigInt = _test_random("TagBigInt", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        value: (generator.bigint ?? $generator.bigint)(BigInt("0"), BigInt("100")),
        ranged: (generator.bigint ?? $generator.bigint)(BigInt("0"), BigInt("100")),
        minimum: (generator.bigint ?? $generator.bigint)(BigInt("0"), BigInt("10")),
        maximum: (generator.bigint ?? $generator.bigint)(BigInt("90"), BigInt("100")),
        multipleOf: BigInt("3") * (generator.bigint ?? $generator.bigint)(BigInt("0"), BigInt("10"))
    });
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagBigInt => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("bigint" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "bigint",
            value: input.value
        })) && ("bigint" === typeof input.ranged && 0n <= input.ranged && 100n >= input.ranged || $guard(_exceptionable, {
            path: _path + ".ranged",
            expected: "bigint",
            value: input.ranged
        })) && ("bigint" === typeof input.minimum && 0n <= input.minimum || $guard(_exceptionable, {
            path: _path + ".minimum",
            expected: "bigint",
            value: input.minimum
        })) && ("bigint" === typeof input.maximum && 100n >= input.maximum || $guard(_exceptionable, {
            path: _path + ".maximum",
            expected: "bigint",
            value: input.maximum
        })) && ("bigint" === typeof input.multipleOf && 0n === input.multipleOf % 3n || $guard(_exceptionable, {
            path: _path + ".multipleOf",
            expected: "bigint",
            value: input.multipleOf
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagBigInt>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<TagBigInt>;
});
