import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_createRandom_CommentTagObjectUnion = _test_random(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)({
    random: (
        generator: Partial<typia.IRandomGenerator> = (
            CommentTagObjectUnion as any
        ).RANDOM,
    ): typia.Resolved<CommentTagObjectUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: "Minimum<3>",
                        kind: "minimum",
                        value: 3,
                    },
                ]) ?? (generator?.number ?? $generator.number)(3, 13),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: "MinLength<3>",
                        kind: "minLength",
                        value: 3,
                    },
                    {
                        name: "MaxLength<7>",
                        kind: "maxLength",
                        value: 7,
                    },
                ]) ??
                (generator?.string ?? $generator.string)(
                    (generator?.integer ?? $generator.integer)(3, 7),
                ),
        });
        return (generator?.array ?? $generator.array)(() =>
            $pick([() => $ro1(), () => $ro0()])(),
        );
    },
    assert: (input: any): CommentTagObjectUnion => {
        const __is = (input: any): input is CommentTagObjectUnion => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7;
            const $iu0 = (input: any): any =>
                (() => {
                    if (
                        "string" === typeof input.value &&
                        3 <= input.value.length &&
                        input.value.length <= 7
                    )
                        return $io1(input);
                    else if (
                        "number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value
                    )
                        return $io0(input);
                    else return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is CommentTagObjectUnion => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("number" === typeof input.value &&
                        (Number.isFinite(input.value) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number",
                                value: input.value,
                            })) &&
                        (3 <= input.value ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "number & Minimum<3>",
                                value: input.value,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(number & Minimum<3>)",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.value &&
                        (3 <= input.value.length ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string & MinLength<3>",
                                value: input.value,
                            })) &&
                        (input.value.length <= 7 ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected: "string & MaxLength<7>",
                                value: input.value,
                            }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(string & MinLength<3> & MaxLength<7>)",
                        value: input.value,
                    });
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if (
                            "string" === typeof input.value &&
                            (3 <= input.value.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string & MinLength<3>",
                                    value: input.value,
                                })) &&
                            (input.value.length <= 7 ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "string & MaxLength<7>",
                                    value: input.value,
                                }))
                        )
                            return $ao1(input, _path, true && _exceptionable);
                        else if (
                            "number" === typeof input.value &&
                            (3 <= input.value ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected: "number & Minimum<3>",
                                    value: input.value,
                                }))
                        )
                            return $ao0(input, _path, true && _exceptionable);
                        else
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                                value: input,
                            });
                    })();
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "CommentTagObjectUnion",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                                        value: elem,
                                    })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "CommentTagObjectUnion",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
