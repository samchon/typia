import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TagLength } from "../../../structures/TagLength";

export const test_validateEquals_TagLength = _test_validateEquals(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<TagLength.Type>> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<TagLength.Type> => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("string" === typeof input.fixed &&
                            5 === input.fixed.length) ||
                            $report(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string",
                                value: input.fixed,
                            }),
                        ("string" === typeof input.minimum &&
                            3 <= input.minimum.length) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string",
                                value: input.minimum,
                            }),
                        ("string" === typeof input.maximum &&
                            7 >= input.maximum.length) ||
                            $report(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string",
                                value: input.maximum,
                            }),
                        ("string" === typeof input.minimum_and_maximum &&
                            3 <= input.minimum_and_maximum.length &&
                            7 >= input.minimum_and_maximum.length) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string",
                                value: input.minimum_and_maximum,
                            }),
                        4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "fixed",
                                            "minimum",
                                            "maximum",
                                            "minimum_and_maximum",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
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
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
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
        })(input),
);
