import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TagType } from "../../../structures/TagType";

export const test_assertEquals_TagType = _test_assertEquals(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: any): Array<TagType.Type> => {
            const __is: any = (
                input: any,
                _exceptionable: boolean = true,
            ): input is Array<TagType.Type> => {
                const $io0: any = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.int &&
                    Number.isFinite(input.int) &&
                    parseInt(input.int) === input.int &&
                    "number" === typeof input.uint &&
                    Number.isFinite(input.uint) &&
                    parseInt(input.uint) === input.uint &&
                    0 <= input.uint &&
                    (2 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["int", "uint"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value: any = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true),
                    )
                );
            };
            const $guard: any = (typia.assertEquals as any).guard;
            const $join: any = (typia.assertEquals as any).join;
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
                            })) &&
                        (2 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["int", "uint"].some(
                                        (prop: any) => key === prop,
                                    )
                                )
                                    return true;
                                const value: any = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
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
        })(input),
);
