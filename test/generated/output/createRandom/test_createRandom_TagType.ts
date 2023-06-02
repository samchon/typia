import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagType } from "../../../structures/TagType";

export const test_createRandom_TagType = _test_random(
    "TagType",
    (generator?: Partial<typia.IRandomGenerator>): typia.Primitive<TagType> => {
        const $generator: any = (typia.createRandom as any).generator;
        const $ro0: any = (
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
        return (generator?.array ?? $generator.array)(() => $ro0());
    },
    (input: any): typia.Primitive<TagType> => {
        const __is: any = (input: any): input is typia.Primitive<TagType> => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                parseInt(input.int) === input.int &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<TagType> => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        (parseInt(input.int) === input.int ||
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
                        (parseInt(input.uint) === input.uint ||
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
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagType",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TagType.Type",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
