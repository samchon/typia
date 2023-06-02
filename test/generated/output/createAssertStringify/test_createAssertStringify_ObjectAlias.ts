import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createAssertStringify_ObjectAlias = _test_assertStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input: any): string => {
        const assert: any = (input: any): ObjectAlias => {
            const __is: any = (input: any): input is ObjectAlias => {
                const $io0: any = (input: any): boolean =>
                    (null === input.id || "string" === typeof input.id) &&
                    "string" === typeof input.email &&
                    "string" === typeof input.name &&
                    (null === input.sex ||
                        1 === input.sex ||
                        2 === input.sex ||
                        "male" === input.sex ||
                        "female" === input.sex) &&
                    (null === input.age ||
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age))) &&
                    (null === input.dead || "boolean" === typeof input.dead);
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
            const $guard: any = (typia.createAssertStringify as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectAlias => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (null === input.id ||
                            "string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "(null | string)",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.email ||
                            $guard(_exceptionable, {
                                path: _path + ".email",
                                expected: "string",
                                value: input.email,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (null === input.sex ||
                            1 === input.sex ||
                            2 === input.sex ||
                            "male" === input.sex ||
                            "female" === input.sex ||
                            $guard(_exceptionable, {
                                path: _path + ".sex",
                                expected: '("female" | "male" | 1 | 2 | null)',
                                value: input.sex,
                            })) &&
                        (null === input.age ||
                            ("number" === typeof input.age &&
                                Number.isFinite(input.age)) ||
                            $guard(_exceptionable, {
                                path: _path + ".age",
                                expected: "(null | number)",
                                value: input.age,
                            })) &&
                        (null === input.dead ||
                            "boolean" === typeof input.dead ||
                            $guard(_exceptionable, {
                                path: _path + ".dead",
                                expected: "(boolean | null)",
                                value: input.dead,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectAlias",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "ObjectAlias.IMember",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify: any = (input: ObjectAlias): string => {
            const $string: any = (typia.createAssertStringify as any).string;
            const $number: any = (typia.createAssertStringify as any).number;
            const $throws: any = (typia.createAssertStringify as any).throws;
            const $so0: any = (input: any): any =>
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
            return (() =>
                `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
        };
        return stringify(assert(input));
    },
    ObjectAlias.SPOILERS,
);
