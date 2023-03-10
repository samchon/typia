import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_createValidatePrune_ArrayHierarchical = _test_validatePrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input: any): typia.IValidation<ArrayHierarchical> => {
        const validate = (input: any): typia.IValidation<ArrayHierarchical> => {
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayHierarchical => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        ("number" === typeof input.serial &&
                            Number.isFinite(input.serial)) ||
                            $report(_exceptionable, {
                                path: _path + ".serial",
                                expected: "number",
                                value: input.serial,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        ((("object" === typeof input.established_at &&
                            null !== input.established_at) ||
                            $report(_exceptionable, {
                                path: _path + ".established_at",
                                expected: "ArrayHierarchical.ITimestamp",
                                value: input.established_at,
                            })) &&
                            $vo1(
                                input.established_at,
                                _path + ".established_at",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".established_at",
                                expected: "ArrayHierarchical.ITimestamp",
                                value: input.established_at,
                            }),
                        ((Array.isArray(input.departments) ||
                            $report(_exceptionable, {
                                path: _path + ".departments",
                                expected:
                                    "Array<ArrayHierarchical.IDepartment>",
                                value: input.departments,
                            })) &&
                            input.departments
                                .map(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".departments[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchical.IDepartment",
                                                value: elem,
                                            })) &&
                                            $vo2(
                                                elem,
                                                _path +
                                                    ".departments[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".departments[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ArrayHierarchical.IDepartment",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".departments",
                                expected:
                                    "Array<ArrayHierarchical.IDepartment>",
                                value: input.departments,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.time &&
                            Number.isFinite(input.time)) ||
                            $report(_exceptionable, {
                                path: _path + ".time",
                                expected: "number",
                                value: input.time,
                            }),
                        ("number" === typeof input.zone &&
                            Number.isFinite(input.zone)) ||
                            $report(_exceptionable, {
                                path: _path + ".zone",
                                expected: "number",
                                value: input.zone,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.code ||
                            $report(_exceptionable, {
                                path: _path + ".code",
                                expected: "string",
                                value: input.code,
                            }),
                        ("number" === typeof input.sales &&
                            Number.isFinite(input.sales)) ||
                            $report(_exceptionable, {
                                path: _path + ".sales",
                                expected: "number",
                                value: input.sales,
                            }),
                        ((("object" === typeof input.created_at &&
                            null !== input.created_at) ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "ArrayHierarchical.ITimestamp",
                                value: input.created_at,
                            })) &&
                            $vo1(
                                input.created_at,
                                _path + ".created_at",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "ArrayHierarchical.ITimestamp",
                                value: input.created_at,
                            }),
                        ((Array.isArray(input.employees) ||
                            $report(_exceptionable, {
                                path: _path + ".employees",
                                expected: "Array<ArrayHierarchical.IEmployee>",
                                value: input.employees,
                            })) &&
                            input.employees
                                .map(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".employees[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchical.IEmployee",
                                                value: elem,
                                            })) &&
                                            $vo3(
                                                elem,
                                                _path +
                                                    ".employees[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".employees[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "ArrayHierarchical.IEmployee",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".employees",
                                expected: "Array<ArrayHierarchical.IEmployee>",
                                value: input.employees,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $report(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }),
                        ("number" === typeof input.grade &&
                            Number.isFinite(input.grade)) ||
                            $report(_exceptionable, {
                                path: _path + ".grade",
                                expected: "number",
                                value: input.grade,
                            }),
                        ((("object" === typeof input.employeed_at &&
                            null !== input.employeed_at) ||
                            $report(_exceptionable, {
                                path: _path + ".employeed_at",
                                expected: "ArrayHierarchical.ITimestamp",
                                value: input.employeed_at,
                            })) &&
                            $vo1(
                                input.employeed_at,
                                _path + ".employeed_at",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".employeed_at",
                                expected: "ArrayHierarchical.ITimestamp",
                                value: input.employeed_at,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<ArrayHierarchical.ICompany>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "ArrayHierarchical.ICompany",
                                            value: elem,
                                        })) &&
                                        $vo0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "ArrayHierarchical.ICompany",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Array<ArrayHierarchical.ICompany>",
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
        const prune = (input: ArrayHierarchical): void => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $io2 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "number" === typeof input.sales &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io1(input.created_at) &&
                Array.isArray(input.employees) &&
                input.employees.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                "number" === typeof input.grade &&
                "object" === typeof input.employeed_at &&
                null !== input.employeed_at &&
                $io1(input.employeed_at);
            const $po0 = (input: any): any => {
                if (
                    "object" === typeof input.established_at &&
                    null !== input.established_at
                )
                    $po1(input.established_at);
                if (Array.isArray(input.departments))
                    input.departments.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po2(elem);
                    });
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "serial" === key ||
                        "name" === key ||
                        "established_at" === key ||
                        "departments" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("time" === key || "zone" === key) continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                if (
                    "object" === typeof input.created_at &&
                    null !== input.created_at
                )
                    $po1(input.created_at);
                if (Array.isArray(input.employees))
                    input.employees.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po3(elem);
                    });
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "code" === key ||
                        "sales" === key ||
                        "created_at" === key ||
                        "employees" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po3 = (input: any): any => {
                if (
                    "object" === typeof input.employeed_at &&
                    null !== input.employeed_at
                )
                    $po1(input.employeed_at);
                for (const key of Object.keys(input)) {
                    if (
                        "id" === key ||
                        "name" === key ||
                        "age" === key ||
                        "grade" === key ||
                        "employeed_at" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ArrayHierarchical.SPOILERS,
);
