import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";

export const test_createRandom_ObjectHttpNullable = _test_random(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectHttpNullable> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            boolean: $pick([
                () => null,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
            bigint: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
                    (generator?.bigint ?? $generator.bigint)(
                        BigInt(0),
                        BigInt(100),
                    ),
            ])(),
            number: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "Minimum<1>",
                            kind: "minimum",
                            value: 1,
                        },
                    ]) ?? (generator?.number ?? $generator.number)(1, 11),
            ])(),
            string: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            constantBoolean: $pick([() => null, () => true])(),
            constantBigint: $pick([
                () => null,
                () => BigInt(1),
                () => BigInt(2),
                () => BigInt(3),
            ])(),
            constantNumber: $pick([() => null, () => 3, () => 2, () => 1])(),
            constantString: $pick([
                () => null,
                () => "three",
                () => "two",
                () => "one",
            ])(),
        });
        return $ro0();
    },
    assert: (input: any): ObjectHttpNullable => {
        const __is = (input: any): input is ObjectHttpNullable => {
            const $io0 = (input: any): boolean =>
                (null === input.boolean ||
                    "boolean" === typeof input.boolean) &&
                (null === input.bigint || "bigint" === typeof input.bigint) &&
                (null === input.number ||
                    ("number" === typeof input.number &&
                        Number.isFinite(input.number) &&
                        1 <= input.number)) &&
                (null === input.string || "string" === typeof input.string) &&
                (null === input.constantBoolean ||
                    true === input.constantBoolean) &&
                (null === input.constantBigint ||
                    BigInt(1) === input.constantBigint ||
                    BigInt(2) === input.constantBigint ||
                    BigInt(3) === input.constantBigint) &&
                (null === input.constantNumber ||
                    3 === input.constantNumber ||
                    2 === input.constantNumber ||
                    1 === input.constantNumber) &&
                (null === input.constantString ||
                    "three" === input.constantString ||
                    "two" === input.constantString ||
                    "one" === input.constantString);
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectHttpNullable => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null === input.boolean ||
                        "boolean" === typeof input.boolean ||
                        $guard(_exceptionable, {
                            path: _path + ".boolean",
                            expected: "(boolean | null)",
                            value: input.boolean,
                        })) &&
                    (null === input.bigint ||
                        "bigint" === typeof input.bigint ||
                        $guard(_exceptionable, {
                            path: _path + ".bigint",
                            expected: "(bigint | null)",
                            value: input.bigint,
                        })) &&
                    (null === input.number ||
                        ("number" === typeof input.number &&
                            (Number.isFinite(input.number) ||
                                $guard(_exceptionable, {
                                    path: _path + ".number",
                                    expected: "number",
                                    value: input.number,
                                })) &&
                            (1 <= input.number ||
                                $guard(_exceptionable, {
                                    path: _path + ".number",
                                    expected: "number & Minimum<1>",
                                    value: input.number,
                                }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".number",
                            expected: "((number & Minimum<1>) | null)",
                            value: input.number,
                        })) &&
                    (null === input.string ||
                        "string" === typeof input.string ||
                        $guard(_exceptionable, {
                            path: _path + ".string",
                            expected: "(null | string)",
                            value: input.string,
                        })) &&
                    (null === input.constantBoolean ||
                        true === input.constantBoolean ||
                        $guard(_exceptionable, {
                            path: _path + ".constantBoolean",
                            expected: "(null | true)",
                            value: input.constantBoolean,
                        })) &&
                    (null === input.constantBigint ||
                        BigInt(1) === input.constantBigint ||
                        BigInt(2) === input.constantBigint ||
                        BigInt(3) === input.constantBigint ||
                        $guard(_exceptionable, {
                            path: _path + ".constantBigint",
                            expected: "(1 | 2 | 3 | null)",
                            value: input.constantBigint,
                        })) &&
                    (null === input.constantNumber ||
                        3 === input.constantNumber ||
                        2 === input.constantNumber ||
                        1 === input.constantNumber ||
                        $guard(_exceptionable, {
                            path: _path + ".constantNumber",
                            expected: "(1 | 2 | 3 | null)",
                            value: input.constantNumber,
                        })) &&
                    (null === input.constantString ||
                        "three" === input.constantString ||
                        "two" === input.constantString ||
                        "one" === input.constantString ||
                        $guard(_exceptionable, {
                            path: _path + ".constantString",
                            expected: '("one" | "three" | "two" | null)',
                            value: input.constantString,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectHttpNullable",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectHttpNullable",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
