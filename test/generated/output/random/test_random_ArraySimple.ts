import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_random_ArraySimple = _test_random("ArraySimple")<ArraySimple>(
    ArraySimple,
)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<ArraySimple> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                email:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                hobbies: (generator?.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                name:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                body:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                rank:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            return (generator?.array ?? $generator.array)(() => $ro0());
        })((ArraySimple as any).RANDOM),
    assert: (input: any): ArraySimple => {
        const __is = (input: any): input is ArraySimple => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.email &&
                Array.isArray(input.hobbies) &&
                input.hobbies.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank &&
                Number.isFinite(input.rank);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArraySimple => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    ("string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    (((Array.isArray(input.hobbies) ||
                        $guard(_exceptionable, {
                            path: _path + ".hobbies",
                            expected: "Array<ArraySimple.IHobby>",
                            value: input.hobbies,
                        })) &&
                        input.hobbies.every(
                            (elem: any, _index2: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".hobbies[" + _index2 + "]",
                                        expected: "ArraySimple.IHobby",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".hobbies[" + _index2 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".hobbies[" + _index2 + "]",
                                    expected: "ArraySimple.IHobby",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".hobbies",
                            expected: "Array<ArraySimple.IHobby>",
                            value: input.hobbies,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    ("string" === typeof input.body ||
                        $guard(_exceptionable, {
                            path: _path + ".body",
                            expected: "string",
                            value: input.body,
                        })) &&
                    (("number" === typeof input.rank &&
                        Number.isFinite(input.rank)) ||
                        $guard(_exceptionable, {
                            path: _path + ".rank",
                            expected: "number",
                            value: input.rank,
                        }));
                return (
                    ((Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArraySimple",
                            value: input,
                        })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "ArraySimple.IPerson",
                                        value: elem,
                                    })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "ArraySimple.IPerson",
                                    value: elem,
                                }),
                        )) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ArraySimple",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
