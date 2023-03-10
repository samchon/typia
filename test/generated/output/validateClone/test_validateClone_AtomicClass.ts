import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_validateClone_AtomicClass = _test_validateClone(
    "AtomicClass",
    AtomicClass.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<
                [
                    Boolean,
                    false | Boolean,
                    boolean | Boolean,
                    Number,
                    Number | 1,
                    number | Number,
                    String,
                    String | "characters",
                    string | String,
                ]
            >
        > => {
            const validate = (
                input: any,
            ): typia.IValidation<
                [
                    Boolean,
                    false | Boolean,
                    boolean | Boolean,
                    Number,
                    Number | 1,
                    number | Number,
                    String,
                    String | "characters",
                    string | String,
                ]
            > => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is [
                    Boolean,
                    false | Boolean,
                    boolean | Boolean,
                    Number,
                    Number | 1,
                    number | Number,
                    String,
                    String | "characters",
                    string | String,
                ] => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
                                value: input,
                            })) &&
                            (input.length === 9 ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
                                    value: input,
                                })) &&
                            [
                                "boolean" === typeof input[0] ||
                                    input[0] instanceof Boolean ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected: "Boolean",
                                        value: input[0],
                                    }),
                                "boolean" === typeof input[1] ||
                                    input[1] instanceof Boolean ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected: "(Boolean | false)",
                                        value: input[1],
                                    }),
                                (null !== input[2] ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected: "(Boolean | boolean)",
                                        value: input[2],
                                    })) &&
                                    (undefined !== input[2] ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected: "(Boolean | boolean)",
                                            value: input[2],
                                        })) &&
                                    ("boolean" === typeof input[2] ||
                                        input[2] instanceof Boolean ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected: "(Boolean | boolean)",
                                            value: input[2],
                                        })),
                                "number" === typeof input[3] ||
                                    input[3] instanceof Number ||
                                    $report(true, {
                                        path: _path + "[3]",
                                        expected: "Number",
                                        value: input[3],
                                    }),
                                "number" === typeof input[4] ||
                                    input[4] instanceof Number ||
                                    $report(true, {
                                        path: _path + "[4]",
                                        expected: "(1 | Number)",
                                        value: input[4],
                                    }),
                                (null !== input[5] ||
                                    $report(true, {
                                        path: _path + "[5]",
                                        expected: "(Number | number)",
                                        value: input[5],
                                    })) &&
                                    (undefined !== input[5] ||
                                        $report(true, {
                                            path: _path + "[5]",
                                            expected: "(Number | number)",
                                            value: input[5],
                                        })) &&
                                    ("number" === typeof input[5] ||
                                        input[5] instanceof Number ||
                                        $report(true, {
                                            path: _path + "[5]",
                                            expected: "(Number | number)",
                                            value: input[5],
                                        })),
                                "string" === typeof input[6] ||
                                    input[6] instanceof String ||
                                    $report(true, {
                                        path: _path + "[6]",
                                        expected: "String",
                                        value: input[6],
                                    }),
                                "string" === typeof input[7] ||
                                    input[7] instanceof String ||
                                    $report(true, {
                                        path: _path + "[7]",
                                        expected: '("characters" | String)',
                                        value: input[7],
                                    }),
                                (null !== input[8] ||
                                    $report(true, {
                                        path: _path + "[8]",
                                        expected: "(String | string)",
                                        value: input[8],
                                    })) &&
                                    (undefined !== input[8] ||
                                        $report(true, {
                                            path: _path + "[8]",
                                            expected: "(String | string)",
                                            value: input[8],
                                        })) &&
                                    ("string" === typeof input[8] ||
                                        input[8] instanceof String ||
                                        $report(true, {
                                            path: _path + "[8]",
                                            expected: "(String | string)",
                                            value: input[8],
                                        })),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                '[Boolean, (Boolean | false), (Boolean | boolean), Number, (1 | Number), (Number | number), String, ("characters" | String), (String | string)]',
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
            const clone = (
                input: [
                    Boolean,
                    false | Boolean,
                    boolean | Boolean,
                    Number,
                    Number | 1,
                    number | Number,
                    String,
                    String | "characters",
                    string | String,
                ],
            ): typia.Primitive<
                [
                    Boolean,
                    false | Boolean,
                    boolean | Boolean,
                    Number,
                    Number | 1,
                    number | Number,
                    String,
                    String | "characters",
                    string | String,
                ]
            > => {
                return Array.isArray(input) &&
                    input.length === 9 &&
                    ("boolean" === typeof input[0] ||
                        input[0] instanceof Boolean) &&
                    ("boolean" === typeof input[1] ||
                        input[1] instanceof Boolean) &&
                    null !== input[2] &&
                    undefined !== input[2] &&
                    ("boolean" === typeof input[2] ||
                        input[2] instanceof Boolean) &&
                    ("number" === typeof input[3] ||
                        input[3] instanceof Number) &&
                    ("number" === typeof input[4] ||
                        input[4] instanceof Number) &&
                    null !== input[5] &&
                    undefined !== input[5] &&
                    ("number" === typeof input[5] ||
                        input[5] instanceof Number) &&
                    ("string" === typeof input[6] ||
                        input[6] instanceof String) &&
                    ("string" === typeof input[7] ||
                        input[7] instanceof String) &&
                    null !== input[8] &&
                    undefined !== input[8] &&
                    ("string" === typeof input[8] || input[8] instanceof String)
                    ? ([
                          input[0] instanceof Boolean
                              ? input[0].valueOf()
                              : (input[0] as any),
                          input[1] instanceof Boolean
                              ? input[1].valueOf()
                              : (input[1] as any),
                          input[2] instanceof Boolean
                              ? input[2].valueOf()
                              : (input[2] as any),
                          input[3] instanceof Number
                              ? input[3].valueOf()
                              : (input[3] as any),
                          input[4] instanceof Number
                              ? input[4].valueOf()
                              : (input[4] as any),
                          input[5] instanceof Number
                              ? input[5].valueOf()
                              : (input[5] as any),
                          input[6] instanceof String
                              ? input[6].valueOf()
                              : (input[6] as any),
                          input[7] instanceof String
                              ? input[7].valueOf()
                              : (input[7] as any),
                          input[8] instanceof String
                              ? input[8].valueOf()
                              : (input[8] as any),
                      ] as any)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    AtomicClass.SPOILERS,
);
