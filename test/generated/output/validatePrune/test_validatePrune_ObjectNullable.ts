import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_validatePrune_ObjectNullable = _test_validatePrune(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            [
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
                ObjectNullable.IProduct,
            ]
        > => {
            const validate: any = (
                input: any,
            ): typia.IValidation<
                [
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                ]
            > => {
                const __is: any = (
                    input: any,
                ): input is [
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                ] => {
                    const $io0: any = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "object" === typeof input.manufacturer &&
                        null !== input.manufacturer &&
                        $io1(input.manufacturer) &&
                        (null === input.brand ||
                            ("object" === typeof input.brand &&
                                null !== input.brand &&
                                $io2(input.brand))) &&
                        (null === input.similar ||
                            ("object" === typeof input.similar &&
                                null !== input.similar &&
                                $iu0(input.similar)));
                    const $io1: any = (input: any): boolean =>
                        "manufacturer" === input.type &&
                        "string" === typeof input.name;
                    const $io2: any = (input: any): boolean =>
                        "brand" === input.type &&
                        "string" === typeof input.name;
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if ("brand" === input.type) return $io2(input);
                            if ("manufacturer" === input.type)
                                return $io1(input);
                            return false;
                        })();
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io0(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io0(input[2])
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validatePrune as any).report(
                    errors,
                );
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ObjectNullable.IProduct,
                        ObjectNullable.IProduct,
                        ObjectNullable.IProduct,
                    ] => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                                ((("object" === typeof input.manufacturer &&
                                    null !== input.manufacturer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".manufacturer",
                                        expected:
                                            "ObjectNullable.IManufacturer",
                                        value: input.manufacturer,
                                    })) &&
                                    $vo1(
                                        input.manufacturer,
                                        _path + ".manufacturer",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".manufacturer",
                                        expected:
                                            "ObjectNullable.IManufacturer",
                                        value: input.manufacturer,
                                    }),
                                null === input.brand ||
                                    ((("object" === typeof input.brand &&
                                        null !== input.brand) ||
                                        $report(_exceptionable, {
                                            path: _path + ".brand",
                                            expected:
                                                "(ObjectNullable.IBrand | null)",
                                            value: input.brand,
                                        })) &&
                                        $vo2(
                                            input.brand,
                                            _path + ".brand",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".brand",
                                        expected:
                                            "(ObjectNullable.IBrand | null)",
                                        value: input.brand,
                                    }),
                                null === input.similar ||
                                    ((("object" === typeof input.similar &&
                                        null !== input.similar) ||
                                        $report(_exceptionable, {
                                            path: _path + ".similar",
                                            expected:
                                                "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                            value: input.similar,
                                        })) &&
                                        $vu0(
                                            input.similar,
                                            _path + ".similar",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".similar",
                                        expected:
                                            "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                        value: input.similar,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "manufacturer" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"manufacturer"',
                                        value: input.type,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "brand" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"brand"',
                                        value: input.type,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("brand" === input.type)
                                    return $vo2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("manufacturer" === input.type)
                                    return $vo1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $report(_exceptionable, {
                                    path: _path,
                                    expected:
                                        "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                                    value: input,
                                });
                            })();
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectNullable",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[ObjectNullable.IProduct, ObjectNullable.IProduct, ObjectNullable.IProduct]",
                                        value: input,
                                    })) &&
                                [
                                    ((("object" === typeof input[0] &&
                                        null !== input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected: "ObjectNullable.IProduct",
                                            value: input[0],
                                        })) &&
                                        $vo0(input[0], _path + "[0]", true)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected: "ObjectNullable.IProduct",
                                            value: input[0],
                                        }),
                                    ((("object" === typeof input[1] &&
                                        null !== input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected: "ObjectNullable.IProduct",
                                            value: input[1],
                                        })) &&
                                        $vo0(input[1], _path + "[1]", true)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected: "ObjectNullable.IProduct",
                                            value: input[1],
                                        }),
                                    ((("object" === typeof input[2] &&
                                        null !== input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected: "ObjectNullable.IProduct",
                                            value: input[2],
                                        })) &&
                                        $vo0(input[2], _path + "[2]", true)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected: "ObjectNullable.IProduct",
                                            value: input[2],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectNullable",
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
            const prune: any = (
                input: [
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                    ObjectNullable.IProduct,
                ],
            ): void => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io1(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io2(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io1: any = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io2: any = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io2(input);
                        if ("manufacturer" === input.type) return $io1(input);
                        return false;
                    })();
                const $throws: any = (typia.validatePrune as any).throws;
                const $po0: any = (input: any): any => {
                    if (
                        "object" === typeof input.manufacturer &&
                        null !== input.manufacturer
                    )
                        $po1(input.manufacturer);
                    if ("object" === typeof input.brand && null !== input.brand)
                        $po2(input.brand);
                    if (
                        "object" === typeof input.similar &&
                        null !== input.similar
                    )
                        $pu0(input.similar);
                    for (const key: any of Object.keys(input)) {
                        if (
                            "name" === key ||
                            "manufacturer" === key ||
                            "brand" === key ||
                            "similar" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po1: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("type" === key || "name" === key) continue;
                        delete input[key];
                    }
                };
                const $po2: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("type" === key || "name" === key) continue;
                        delete input[key];
                    }
                };
                if (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io0(input[1]) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io0(input[2])
                ) {
                    if ("object" === typeof input[0] && null !== input[0])
                        $po0(input[0]);
                    if ("object" === typeof input[1] && null !== input[1])
                        $po0(input[1]);
                    if ("object" === typeof input[2] && null !== input[2])
                        $po0(input[2]);
                }
            };
            const output: any = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ObjectNullable.SPOILERS,
);
