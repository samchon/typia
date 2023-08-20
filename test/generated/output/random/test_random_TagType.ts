import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagType } from "../../../structures/TagType";

export const test_random_TagType = _test_random<TagType>(TagType)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<TagType> => {
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
                int:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "int",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
                uint:
                    (generator?.customs ?? $generator.customs)?.number?.([
                        {
                            name: "type",
                            value: "uint",
                        },
                    ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
            });
            return $ro0();
        })(),
    assert: (input: any): TagType => {
        const __is = (input: any): input is TagType => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                Math.floor(input.int) === input.int &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                Math.floor(input.uint) === input.uint &&
                0 <= input.uint;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagType => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagType.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagType.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagType.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagType.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        (Math.floor(input.int) === input.int ||
                            $guard(_exceptionable, {
                                path: _path + ".int",
                                expected: "number (@type int)",
                                value: input.int,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".int",
                            expected: "number",
                            value: input.int,
                        })) &&
                    (("number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        (Math.floor(input.uint) === input.uint ||
                            $guard(_exceptionable, {
                                path: _path + ".uint",
                                expected: "number (@type uint)",
                                value: input.uint,
                            })) &&
                        (0 <= input.uint ||
                            $guard(_exceptionable, {
                                path: _path + ".uint",
                                expected: "number (@type uint)",
                                value: input.uint,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint",
                            expected: "number",
                            value: input.uint,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagType",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagType",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
