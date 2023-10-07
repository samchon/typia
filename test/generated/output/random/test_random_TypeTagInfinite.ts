import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TypeTagInfinite } from "../../../structures/TypeTagInfinite";

export const test_random_TypeTagInfinite = _test_random(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<TypeTagInfinite> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                ranged:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "Minimum<0>",
                            kind: "minimum",
                            value: 0,
                        },
                        {
                            name: "Maximum<100>",
                            kind: "maximum",
                            value: 100,
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 100),
                minimum:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "Minimum<0>",
                            kind: "minimum",
                            value: 0,
                        },
                    ]) ?? (generator?.number ?? $generator.number)(0, 10),
                maximum:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "Maximum<100>",
                            kind: "maximum",
                            value: 100,
                        },
                    ]) ?? (generator?.number ?? $generator.number)(90, 100),
                multipleOf:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "MultipleOf<3>",
                            kind: "multipleOf",
                            value: 3,
                        },
                    ]) ?? 3 * (generator?.integer ?? $generator.integer)(0, 10),
                typed:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            });
            return $ro0();
        })((TypeTagInfinite as any).RANDOM),
    assert: (input: any): TypeTagInfinite => {
        const __is = (input: any): input is TypeTagInfinite => {
            return (
                "object" === typeof input &&
                null !== input &&
                "number" === typeof (input as any).value &&
                Number.isFinite((input as any).value) &&
                "number" === typeof (input as any).ranged &&
                0 <= (input as any).ranged &&
                (input as any).ranged <= 100 &&
                "number" === typeof (input as any).minimum &&
                Number.isFinite((input as any).minimum) &&
                0 <= (input as any).minimum &&
                "number" === typeof (input as any).maximum &&
                Number.isFinite((input as any).maximum) &&
                (input as any).maximum <= 100 &&
                "number" === typeof (input as any).multipleOf &&
                (input as any).multipleOf % 3 === 0 &&
                "number" === typeof (input as any).typed &&
                Math.floor((input as any).typed) === (input as any).typed &&
                -2147483648 <= (input as any).typed &&
                (input as any).typed <= 2147483647
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TypeTagInfinite => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.value &&
                        Number.isFinite(input.value)) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number",
                            value: input.value,
                        })) &&
                    (("number" === typeof input.ranged &&
                        (0 <= input.ranged ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number & Minimum<0>",
                                value: input.ranged,
                            })) &&
                        (input.ranged <= 100 ||
                            $guard(_exceptionable, {
                                path: _path + ".ranged",
                                expected: "number & Maximum<100>",
                                value: input.ranged,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".ranged",
                            expected: "(number & Minimum<0> & Maximum<100>)",
                            value: input.ranged,
                        })) &&
                    (("number" === typeof input.minimum &&
                        (Number.isFinite(input.minimum) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            })) &&
                        (0 <= input.minimum ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number & Minimum<0>",
                                value: input.minimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "(number & Minimum<0>)",
                            value: input.minimum,
                        })) &&
                    (("number" === typeof input.maximum &&
                        (Number.isFinite(input.maximum) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "number",
                                value: input.maximum,
                            })) &&
                        (input.maximum <= 100 ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "number & Maximum<100>",
                                value: input.maximum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "(number & Maximum<100>)",
                            value: input.maximum,
                        })) &&
                    (("number" === typeof input.multipleOf &&
                        (input.multipleOf % 3 === 0 ||
                            $guard(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number & MultipleOf<3>",
                                value: input.multipleOf,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".multipleOf",
                            expected: "(number & MultipleOf<3>)",
                            value: input.multipleOf,
                        })) &&
                    (("number" === typeof input.typed &&
                        ((Math.floor(input.typed) === input.typed &&
                            -2147483648 <= input.typed &&
                            input.typed <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".typed",
                                expected: 'number & Type<"int32">',
                                value: input.typed,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".typed",
                            expected: '(number & Type<"int32">)',
                            value: input.typed,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TypeTagInfinite",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TypeTagInfinite",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
