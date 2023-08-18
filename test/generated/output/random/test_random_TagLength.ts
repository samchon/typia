import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagLength } from "../../../structures/TagLength";

export const test_random_TagLength = _test_random<TagLength>(TagLength)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TagLength> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator?.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                fixed:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "length",
                            value: "5",
                        },
                    ]) ?? (generator?.string ?? $generator.string)(5),
                minimum:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "minLength",
                            value: "3",
                        },
                    ]) ??
                    (generator?.string ?? $generator.string)(
                        (generator?.integer ?? $generator.integer)(3, 25),
                    ),
                maximum:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "maxLength",
                            value: "7",
                        },
                    ]) ??
                    (generator?.string ?? $generator.string)(
                        (generator?.integer ?? $generator.integer)(5, 7),
                    ),
                minimum_and_maximum:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "minLength",
                            value: "3",
                        },
                        {
                            name: "maxLength",
                            value: "7",
                        },
                    ]) ??
                    (generator?.string ?? $generator.string)(
                        (generator?.integer ?? $generator.integer)(3, 7),
                    ),
                equal:
                    (generator?.customs ?? $generator.customs)?.string?.([
                        {
                            name: "minLength",
                            value: "10",
                        },
                        {
                            name: "maxLength",
                            value: "19",
                        },
                    ]) ??
                    (generator?.string ?? $generator.string)(
                        (generator?.integer ?? $generator.integer)(10, 19),
                    ),
            });
            return $ro0();
        })(),
    assert: (input: any): TagLength => {
        const __is = (input: any): input is TagLength => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length &&
                "string" === typeof input.equal &&
                10 <= input.equal.length &&
                19 >= input.equal.length;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagLength => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagLength.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagLength.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagLength.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagLength.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("string" === typeof input.fixed &&
                        (5 === input.fixed.length ||
                            $guard(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string (@length 5)",
                                value: input.fixed,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".fixed",
                            expected: "string",
                            value: input.fixed,
                        })) &&
                    (("string" === typeof input.minimum &&
                        (3 <= input.minimum.length ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string (@minLength 3)",
                                value: input.minimum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "string",
                            value: input.minimum,
                        })) &&
                    (("string" === typeof input.maximum &&
                        (7 >= input.maximum.length ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string (@maxLength 7)",
                                value: input.maximum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "string",
                            value: input.maximum,
                        })) &&
                    (("string" === typeof input.minimum_and_maximum &&
                        (3 <= input.minimum_and_maximum.length ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string (@minLength 3)",
                                value: input.minimum_and_maximum,
                            })) &&
                        (7 >= input.minimum_and_maximum.length ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string (@maxLength 7)",
                                value: input.minimum_and_maximum,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".minimum_and_maximum",
                            expected: "string",
                            value: input.minimum_and_maximum,
                        })) &&
                    (("string" === typeof input.equal &&
                        (10 <= input.equal.length ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "string (@minLength 10)",
                                value: input.equal,
                            })) &&
                        (19 >= input.equal.length ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "string (@maxLength 19)",
                                value: input.equal,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "string",
                            value: input.equal,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagLength",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagLength",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
