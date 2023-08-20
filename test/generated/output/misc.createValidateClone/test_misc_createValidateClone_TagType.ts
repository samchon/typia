import typia from "../../../../src";
import { _test_misc_validateClone } from "../../../internal/_test_misc_validateClone";
import { TagType } from "../../../structures/TagType";

export const test_misc_validateClone_TagType =
    _test_misc_validateClone<TagType>(TagType)(
        (input: any): typia.IValidation<typia.Primitive<TagType>> => {
            const validate = (input: any): typia.IValidation<TagType> => {
                const errors = [] as any[];
                const __is = (input: any): input is TagType => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        Math.floor(input.int) === input.int &&
                        "number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        Math.floor(input.uint) === input.uint &&
                        0 <= input.uint;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.misc.createValidateClone as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is TagType => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagType.Type>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "TagType.Type",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "TagType.Type",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "Array<TagType.Type>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.int &&
                                    Number.isFinite(input.int) &&
                                    (Math.floor(input.int) === input.int ||
                                        $report(_exceptionable, {
                                            path: _path + ".int",
                                            expected: "number (@type int)",
                                            value: input.int,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int",
                                        expected: "number",
                                        value: input.int,
                                    }),
                                ("number" === typeof input.uint &&
                                    Number.isFinite(input.uint) &&
                                    (Math.floor(input.uint) === input.uint ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        })) &&
                                    (0 <= input.uint ||
                                        $report(_exceptionable, {
                                            path: _path + ".uint",
                                            expected: "number (@type uint)",
                                            value: input.uint,
                                        }))) ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number",
                                        value: input.uint,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "TagType",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "TagType",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (input: TagType): typia.Primitive<TagType> => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Math.floor(input.int) === input.int &&
                    "number" === typeof input.uint &&
                    Math.floor(input.uint) === input.uint &&
                    0 <= input.uint;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $co0 = (input: any): any => ({
                    value: Array.isArray(input.value)
                        ? $cp0(input.value)
                        : (input.value as any),
                });
                const $co1 = (input: any): any => ({
                    int: input.int as any,
                    uint: input.uint as any,
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        },
    );
