import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_validatePrune_ObjectPropertyNullable = _test_validatePrune(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            [
                Array<ObjectPropertyNullable.IPointer<boolean>>,
                Array<ObjectPropertyNullable.IPointer<number>>,
                Array<ObjectPropertyNullable.IPointer<string>>,
                Array<
                    ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                >,
            ]
        > => {
            const validate = (
                input: any,
            ): typia.IValidation<
                [
                    Array<ObjectPropertyNullable.IPointer<boolean>>,
                    Array<ObjectPropertyNullable.IPointer<number>>,
                    Array<ObjectPropertyNullable.IPointer<string>>,
                    Array<
                        ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                    >,
                ]
            > => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is [
                    Array<ObjectPropertyNullable.IPointer<boolean>>,
                    Array<ObjectPropertyNullable.IPointer<number>>,
                    Array<ObjectPropertyNullable.IPointer<string>>,
                    Array<
                        ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                    >,
                ] => {
                    const $io0 = (input: any): boolean =>
                        null === input.value ||
                        "boolean" === typeof input.value;
                    const $io1 = (input: any): boolean =>
                        null === input.value ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value));
                    const $io2 = (input: any): boolean =>
                        null === input.value || "string" === typeof input.value;
                    const $io3 = (input: any): boolean =>
                        null === input.value ||
                        ("object" === typeof input.value &&
                            null !== input.value &&
                            $io4(input.value));
                    const $io4 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        (null === input.name ||
                            "string" === typeof input.name) &&
                        (undefined === input.grade ||
                            ("number" === typeof input.grade &&
                                Number.isFinite(input.grade))) &&
                        (null === input.serial ||
                            undefined === input.serial ||
                            ("number" === typeof input.serial &&
                                Number.isFinite(input.serial))) &&
                        (null === input.activated ||
                            "boolean" === typeof input.activated);
                    return (
                        Array.isArray(input) &&
                        input.length === 4 &&
                        Array.isArray(input[0]) &&
                        input[0].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        ) &&
                        Array.isArray(input[1]) &&
                        input[1].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        ) &&
                        Array.isArray(input[2]) &&
                        input[2].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ) &&
                        Array.isArray(input[3]) &&
                        input[3].every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        )
                    );
                };
                if (false === __is(input)) {
                    const $report = (typia.validatePrune as any).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        Array<ObjectPropertyNullable.IPointer<boolean>>,
                        Array<ObjectPropertyNullable.IPointer<number>>,
                        Array<ObjectPropertyNullable.IPointer<string>>,
                        Array<
                            ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                        >,
                    ] => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.value ||
                                    "boolean" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(boolean | null)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.value ||
                                    ("number" === typeof input.value &&
                                        Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(null | number)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.value ||
                                    "string" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "(null | string)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                null === input.value ||
                                    ((("object" === typeof input.value &&
                                        null !== input.value) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "(ObjectPropertyNullable.IMember | null)",
                                            value: input.value,
                                        })) &&
                                        $vo4(
                                            input.value,
                                            _path + ".value",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectPropertyNullable.IMember | null)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.id ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    }),
                                null === input.name ||
                                    "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "(null | string)",
                                        value: input.name,
                                    }),
                                undefined === input.grade ||
                                    ("number" === typeof input.grade &&
                                        Number.isFinite(input.grade)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".grade",
                                        expected: "(number | undefined)",
                                        value: input.grade,
                                    }),
                                null === input.serial ||
                                    undefined === input.serial ||
                                    ("number" === typeof input.serial &&
                                        Number.isFinite(input.serial)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".serial",
                                        expected: "(null | number | undefined)",
                                        value: input.serial,
                                    }),
                                null === input.activated ||
                                    "boolean" === typeof input.activated ||
                                    $report(_exceptionable, {
                                        path: _path + ".activated",
                                        expected: "(boolean | null)",
                                        value: input.activated,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((Array.isArray(input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectPropertyNullable",
                                    value: input,
                                })) &&
                                (input.length === 4 ||
                                    $report(true, {
                                        path: _path + "",
                                        expected:
                                            "[Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>]",
                                        value: input,
                                    })) &&
                                [
                                    ((Array.isArray(input[0]) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<boolean>>",
                                            value: input[0],
                                        })) &&
                                        input[0]
                                            .map(
                                                (elem: any, _index1: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[0][" +
                                                                _index1 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<boolean>",
                                                            value: elem,
                                                        })) &&
                                                        $vo0(
                                                            elem,
                                                            _path +
                                                                "[0][" +
                                                                _index1 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[0][" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<boolean>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[0]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<boolean>>",
                                            value: input[0],
                                        }),
                                    ((Array.isArray(input[1]) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<number>>",
                                            value: input[1],
                                        })) &&
                                        input[1]
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[1][" +
                                                                _index2 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<number>",
                                                            value: elem,
                                                        })) &&
                                                        $vo1(
                                                            elem,
                                                            _path +
                                                                "[1][" +
                                                                _index2 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[1][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<number>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[1]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<number>>",
                                            value: input[1],
                                        }),
                                    ((Array.isArray(input[2]) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<string>>",
                                            value: input[2],
                                        })) &&
                                        input[2]
                                            .map(
                                                (elem: any, _index3: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[2][" +
                                                                _index3 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<string>",
                                                            value: elem,
                                                        })) &&
                                                        $vo2(
                                                            elem,
                                                            _path +
                                                                "[2][" +
                                                                _index3 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[2][" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<string>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[2]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<string>>",
                                            value: input[2],
                                        }),
                                    ((Array.isArray(input[3]) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                            value: input[3],
                                        })) &&
                                        input[3]
                                            .map(
                                                (elem: any, _index4: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[3][" +
                                                                _index4 +
                                                                "]",
                                                            expected:
                                                                "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
                                                            value: elem,
                                                        })) &&
                                                        $vo3(
                                                            elem,
                                                            _path +
                                                                "[3][" +
                                                                _index4 +
                                                                "]",
                                                            true,
                                                        )) ||
                                                    $report(true, {
                                                        path:
                                                            _path +
                                                            "[3][" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(true, {
                                            path: _path + "[3]",
                                            expected:
                                                "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                            value: input[3],
                                        }),
                                ].every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectPropertyNullable",
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
            const prune = (
                input: [
                    Array<ObjectPropertyNullable.IPointer<boolean>>,
                    Array<ObjectPropertyNullable.IPointer<number>>,
                    Array<ObjectPropertyNullable.IPointer<string>>,
                    Array<
                        ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>
                    >,
                ],
            ): void => {
                const $io0 = (input: any): boolean =>
                    null === input.value || "boolean" === typeof input.value;
                const $io1 = (input: any): boolean =>
                    null === input.value || "number" === typeof input.value;
                const $io2 = (input: any): boolean =>
                    null === input.value || "string" === typeof input.value;
                const $io3 = (input: any): boolean =>
                    null === input.value ||
                    ("object" === typeof input.value &&
                        null !== input.value &&
                        $io4(input.value));
                const $io4 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    (null === input.name || "string" === typeof input.name) &&
                    (undefined === input.grade ||
                        "number" === typeof input.grade) &&
                    (null === input.serial ||
                        undefined === input.serial ||
                        "number" === typeof input.serial) &&
                    (null === input.activated ||
                        "boolean" === typeof input.activated);
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                const $pp1 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po1(elem);
                    });
                const $pp2 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po2(elem);
                    });
                const $pp3 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po3(elem);
                    });
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po2 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po3 = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po4(input.value);
                    for (const key of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po4 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "grade" === key ||
                            "serial" === key ||
                            "activated" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                if (
                    Array.isArray(input) &&
                    input.length === 4 &&
                    Array.isArray(input[0]) &&
                    input[0].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    Array.isArray(input[1]) &&
                    input[1].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    ) &&
                    Array.isArray(input[2]) &&
                    input[2].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    Array.isArray(input[3]) &&
                    input[3].every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    )
                ) {
                    if (Array.isArray(input[0])) $pp0(input[0]);
                    if (Array.isArray(input[1])) $pp1(input[1]);
                    if (Array.isArray(input[2])) $pp2(input[2]);
                    if (Array.isArray(input[3])) $pp3(input[3]);
                }
            };
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        })(input),
    ObjectPropertyNullable.SPOILERS,
);
