import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TagLength } from "../../../structures/TagLength";

export const test_createValidate_TagLength = _test_validate(
    "TagLength",
    TagLength.generate,
    (input: any): typia.IValidation<TagLength> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagLength => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("string" === typeof input.fixed &&
                        (5 === input.fixed.length ||
                            $report(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string (@length 5)",
                                value: input.fixed,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".fixed",
                            expected: "string",
                            value: input.fixed,
                        }),
                    ("string" === typeof input.minimum &&
                        (3 <= input.minimum.length ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string (@minLength 3)",
                                value: input.minimum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".minimum",
                            expected: "string",
                            value: input.minimum,
                        }),
                    ("string" === typeof input.maximum &&
                        (7 >= input.maximum.length ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string (@maxLength 7)",
                                value: input.maximum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".maximum",
                            expected: "string",
                            value: input.maximum,
                        }),
                    ("string" === typeof input.minimum_and_maximum &&
                        (3 <= input.minimum_and_maximum.length ||
                            $report(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string (@minLength 3)",
                                value: input.minimum_and_maximum,
                            })) &&
                        (7 >= input.minimum_and_maximum.length ||
                            $report(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string (@maxLength 7)",
                                value: input.minimum_and_maximum,
                            }))) ||
                        $report(_exceptionable, {
                            path: _path + ".minimum_and_maximum",
                            expected: "string",
                            value: input.minimum_and_maximum,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagLength.Type>>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagLength.Type>",
                                        value: elem,
                                    })) &&
                                    $vo0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<TagLength.Type>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Array<Resolve<TagLength.Type>>",
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
    },
    TagLength.SPOILERS,
);
