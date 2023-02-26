import typia from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayHierarchical = _test_validateEquals(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input: any): typia.IValidation<ArrayHierarchical> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
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
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
                            value: input.established_at,
                        })) &&
                        $vo1(
                            input.established_at,
                            _path + ".established_at",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".established_at",
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
                            value: input.established_at,
                        }),
                    ((Array.isArray(input.departments) ||
                        $report(_exceptionable, {
                            path: _path + ".departments",
                            expected:
                                "Array<Resolve<ArrayHierarchical.IDepartment>>",
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
                                                "Resolve<ArrayHierarchical.IDepartment>",
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
                                            "Resolve<ArrayHierarchical.IDepartment>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".departments",
                            expected:
                                "Array<Resolve<ArrayHierarchical.IDepartment>>",
                            value: input.departments,
                        }),
                    5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    [
                                        "id",
                                        "serial",
                                        "name",
                                        "established_at",
                                        "departments",
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
                    2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    ["time", "zone"].some(
                                        (prop) => key === prop,
                                    )
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
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
                            value: input.created_at,
                        })) &&
                        $vo1(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
                            value: input.created_at,
                        }),
                    ((Array.isArray(input.employees) ||
                        $report(_exceptionable, {
                            path: _path + ".employees",
                            expected:
                                "Array<Resolve<ArrayHierarchical.IEmployee>>",
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
                                                "Resolve<ArrayHierarchical.IEmployee>",
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
                                            "Resolve<ArrayHierarchical.IEmployee>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".employees",
                            expected:
                                "Array<Resolve<ArrayHierarchical.IEmployee>>",
                            value: input.employees,
                        }),
                    5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    [
                                        "id",
                                        "code",
                                        "sales",
                                        "created_at",
                                        "employees",
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
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
                            value: input.employeed_at,
                        })) &&
                        $vo1(
                            input.employeed_at,
                            _path + ".employeed_at",
                            true && _exceptionable,
                        )) ||
                        $report(_exceptionable, {
                            path: _path + ".employeed_at",
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
                            value: input.employeed_at,
                        }),
                    5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    [
                                        "id",
                                        "name",
                                        "age",
                                        "grade",
                                        "employeed_at",
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
                        expected: "Array<Resolve<ArrayHierarchical.ICompany>>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ArrayHierarchical.ICompany>",
                                        value: elem,
                                    })) &&
                                    $vo0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "Resolve<ArrayHierarchical.ICompany>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Array<Resolve<ArrayHierarchical.ICompany>>",
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
);
