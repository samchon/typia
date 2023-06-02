import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createValidateParse_ObjectAlias = _test_validateParse(
    "ObjectAlias",
    ObjectAlias.generate,
    (input: string): typia.IValidation<typia.Primitive<ObjectAlias>> => {
        const validate: any = (input: any): typia.IValidation<ObjectAlias> => {
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
            const errors: any = [] as any[];
            const $report: any = (typia.createValidateParse as any).report(
                errors,
            );
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectAlias => {
                    const $vo0: any = (
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
                                1 === input.sex ||
                                2 === input.sex ||
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
                                                    _path + "[" + _index1 + "]",
                                                expected: "ObjectAlias.IMember",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
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
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        input = JSON.parse(input);
        const output: any = validate(input);
        return output as any;
    },
    ObjectAlias.SPOILERS,
);
