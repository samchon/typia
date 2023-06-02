import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagType } from "../../../structures/TagType";

export const test_assertClone_TagType = _test_assertClone(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagType.Type>> => {
            const assert: any = (input: any): Array<TagType.Type> => {
                const __is: any = (
                    input: any,
                ): input is Array<TagType.Type> => {
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
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<TagType.Type> => {
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
                                    expected: "Array<TagType.Type>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagType.Type",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone: any = (
                input: Array<TagType.Type>,
            ): typia.Primitive<Array<TagType.Type>> => {
                const $co0: any = (input: any): any => ({
                    int: input.int as any,
                    uint: input.uint as any,
                });
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    TagType.SPOILERS,
);
