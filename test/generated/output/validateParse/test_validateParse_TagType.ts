import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TagType } from "../../../structures/TagType";

export const test_validateParse_TagType = _test_validateParse(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: string): typia.IValidation<typia.Primitive<TagType>> => {
            const validate = (input: any): typia.IValidation<TagType> => {
                const __is = (input: any): input is TagType => {
                    const $io0 = (input: any): boolean =>
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
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                if (false === __is(input))
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
                                ("number" === typeof input.int &&
                                    Number.isFinite(input.int) &&
                                    (parseInt(input.int) === input.int ||
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
                                    (parseInt(input.uint) === input.uint ||
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
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "Array<Resolve<TagType.Type>>",
                                    value: input,
                                })) &&
                                input
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "Resolve<TagType.Type>",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "Resolve<TagType.Type>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<Resolve<TagType.Type>>",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            input = JSON.parse(input);
            const output = validate(input);
            return output as any;
        })(input),
    TagType.SPOILERS,
);
