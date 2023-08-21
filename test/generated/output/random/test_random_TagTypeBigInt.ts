import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagTypeBigInt } from "../../../structures/TagTypeBigInt";

export const test_random_TagTypeBigInt = _test_random(
    "TagTypeBigInt",
)<TagTypeBigInt>(TagTypeBigInt)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TagTypeBigInt> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                in64:
                    (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
                    (generator?.bigint ?? $generator.bigint)(
                        BigInt(0),
                        BigInt(100),
                    ),
                uint64:
                    (generator?.customs ?? $generator.customs)?.bigint?.([
                        {
                            name: "type",
                            value: "uint64",
                        },
                    ]) ??
                    (generator?.bigint ?? $generator.bigint)(
                        BigInt(0),
                        BigInt(10),
                    ),
            });
            return $ro0();
        })(),
    assert: (input: any): TagTypeBigInt => {
        const __is = (input: any): input is TagTypeBigInt => {
            return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).in64 &&
                "bigint" === typeof (input as any).uint64 &&
                BigInt(0) <= (input as any).uint64
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagTypeBigInt => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("bigint" === typeof input.in64 ||
                        $guard(_exceptionable, {
                            path: _path + ".in64",
                            expected: "bigint",
                            value: input.in64,
                        })) &&
                    (("bigint" === typeof input.uint64 &&
                        (BigInt(0) <= input.uint64 ||
                            $guard(_exceptionable, {
                                path: _path + ".uint64",
                                expected: "bigint (@type uint64)",
                                value: input.uint64,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint64",
                            expected: "bigint",
                            value: input.uint64,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagTypeBigInt",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagTypeBigInt",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
