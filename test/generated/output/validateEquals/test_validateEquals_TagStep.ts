import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagStep = _test_validateEquals(
    "TagStep",
    TagStep.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<TagStep.Type>> => {
            const errors = [] as any[];
            const $report = (typia.validateEquals as any).report(errors);
            const $join = (typia.validateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<TagStep.Type> => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.exclusiveMinimum &&
                            0 === (input.exclusiveMinimum % 5) - 3 &&
                            3 < input.exclusiveMinimum) ||
                            $report(_exceptionable, {
                                path: _path + ".exclusiveMinimum",
                                expected: "number",
                                value: input.exclusiveMinimum,
                            }),
                        ("number" === typeof input.minimum &&
                            0 === (input.minimum % 5) - 3 &&
                            3 <= input.minimum) ||
                            $report(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "number",
                                value: input.minimum,
                            }),
                        ("number" === typeof input.range &&
                            0 === (input.range % 5) - 0 &&
                            0 < input.range &&
                            100 > input.range) ||
                            $report(_exceptionable, {
                                path: _path + ".range",
                                expected: "number",
                                value: input.range,
                            }),
                        ("number" === typeof input.multipleOf &&
                            0 === input.multipleOf % 5 &&
                            3 <= input.multipleOf &&
                            99 >= input.multipleOf) ||
                            $report(_exceptionable, {
                                path: _path + ".multipleOf",
                                expected: "number",
                                value: input.multipleOf,
                            }),
                        4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "exclusiveMinimum",
                                            "minimum",
                                            "range",
                                            "multipleOf",
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
                            expected: "Array<Resolve<TagStep.Type>>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "Resolve<TagStep.Type>",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagStep.Type>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagStep.Type>>",
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
