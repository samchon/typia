import typia from "../../../../src";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_validateStringify_ObjectAlias =
    _test_json_validateStringify<ObjectAlias>(ObjectAlias)((input) =>
        ((input: Array<ObjectAlias.IMember>): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<Array<ObjectAlias.IMember>> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is Array<ObjectAlias.IMember> => {
                    const $io0 = (input: any): boolean =>
                        (null === input.id || "string" === typeof input.id) &&
                        "string" === typeof input.email &&
                        "string" === typeof input.name &&
                        (null === input.sex ||
                            2 === input.sex ||
                            1 === input.sex ||
                            "male" === input.sex ||
                            "female" === input.sex) &&
                        (null === input.age ||
                            ("number" === typeof input.age &&
                                Number.isFinite(input.age))) &&
                        (null === input.dead ||
                            "boolean" === typeof input.dead);
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
                if (false === __is(input)) {
                    const $report = (
                        typia.json.validateStringify as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ObjectAlias.IMember> => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.id ||
                                    "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "(null | string)",
                                        value: input.id,
                                    }),
                                "string" === typeof input.email ||
                                    $report(_exceptionable, {
                                        path: _path + ".email",
                                        expected: "string",
                                        value: input.email,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                                null === input.sex ||
                                    2 === input.sex ||
                                    1 === input.sex ||
                                    "male" === input.sex ||
                                    "female" === input.sex ||
                                    $report(_exceptionable, {
                                        path: _path + ".sex",
                                        expected:
                                            '("female" | "male" | 1 | 2 | null)',
                                        value: input.sex,
                                    }),
                                null === input.age ||
                                    ("number" === typeof input.age &&
                                        Number.isFinite(input.age)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".age",
                                        expected: "(null | number)",
                                        value: input.age,
                                    }),
                                null === input.dead ||
                                    "boolean" === typeof input.dead ||
                                    $report(_exceptionable, {
                                        path: _path + ".dead",
                                        expected: "(boolean | null)",
                                        value: input.dead,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectAlias",
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
                                                        "ObjectAlias.IMember",
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
                                                expected: "ObjectAlias.IMember",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectAlias",
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
            const stringify = (input: Array<ObjectAlias.IMember>): string => {
                const $string = (typia.json.validateStringify as any).string;
                const $number = (typia.json.validateStringify as any).number;
                const $throws = (typia.json.validateStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"id":${
                        null !== input.id ? $string(input.id) : "null"
                    },"email":${$string(input.email)},"name":${$string(
                        input.name,
                    )},"sex":${
                        null !== input.sex
                            ? (() => {
                                  if ("string" === typeof input.sex)
                                      return $string(input.sex);
                                  if ("number" === typeof input.sex)
                                      return $number(input.sex);
                                  if ("string" === typeof input.sex)
                                      return '"' + input.sex + '"';
                                  $throws({
                                      expected:
                                          '("female" | "male" | 1 | 2 | null)',
                                      value: input.sex,
                                  });
                              })()
                            : "null"
                    },"age":${
                        null !== input.age ? $number(input.age) : "null"
                    },"dead":${null !== input.dead ? input.dead : "null"}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        })(input),
    );
