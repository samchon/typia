import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_misc_assertClone_ArrayHierarchicalPointer =
    _test_misc_assertClone<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        (input) =>
            ((input: any): typia.Primitive<ArrayHierarchicalPointer> => {
                const assert = (input: any): ArrayHierarchicalPointer => {
                    const __is = (
                        input: any,
                    ): input is ArrayHierarchicalPointer => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.value) &&
                            input.value.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            );
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "number" === typeof input.serial &&
                            Number.isFinite(input.serial) &&
                            "string" === typeof input.name &&
                            "object" === typeof input.established_at &&
                            null !== input.established_at &&
                            "number" ===
                                typeof (input.established_at as any).time &&
                            Number.isFinite(
                                (input.established_at as any).time,
                            ) &&
                            "number" ===
                                typeof (input.established_at as any).zone &&
                            Number.isFinite(
                                (input.established_at as any).zone,
                            ) &&
                            Array.isArray(input.departments) &&
                            input.departments.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            );
                        const $io3 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.code &&
                            "number" === typeof input.sales &&
                            Number.isFinite(input.sales) &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
                            Number.isFinite((input.created_at as any).zone) &&
                            Array.isArray(input.employees) &&
                            input.employees.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            );
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.name &&
                            "number" === typeof input.age &&
                            Number.isFinite(input.age) &&
                            "number" === typeof input.grade &&
                            Number.isFinite(input.grade) &&
                            "object" === typeof input.employeed_at &&
                            null !== input.employeed_at &&
                            "number" ===
                                typeof (input.employeed_at as any).time &&
                            Number.isFinite((input.employeed_at as any).time) &&
                            "number" ===
                                typeof (input.employeed_at as any).zone &&
                            Number.isFinite((input.employeed_at as any).zone);
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ArrayHierarchicalPointer => {
                            const $guard = (typia.misc.assertClone as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ((Array.isArray(input.value) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.ICompany>",
                                        value: input.value,
                                    })) &&
                                    input.value.every(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ArrayHierarchicalPointer.ICompany",
                                                    value: elem,
                                                })) &&
                                                $ao1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchicalPointer.ICompany",
                                                value: elem,
                                            }),
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<ArrayHierarchicalPointer.ICompany>",
                                    value: input.value,
                                });
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    })) &&
                                (("number" === typeof input.serial &&
                                    Number.isFinite(input.serial)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".serial",
                                        expected: "number",
                                        value: input.serial,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                (((("object" === typeof input.established_at &&
                                    null !== input.established_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".established_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.established_at,
                                    })) &&
                                    $ao2(
                                        input.established_at,
                                        _path + ".established_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".established_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.established_at,
                                    })) &&
                                (((Array.isArray(input.departments) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".departments",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IDepartment>",
                                        value: input.departments,
                                    })) &&
                                    input.departments.every(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".departments[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ArrayHierarchicalPointer.IDepartment",
                                                    value: elem,
                                                })) &&
                                                $ao3(
                                                    elem,
                                                    _path +
                                                        ".departments[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".departments[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchicalPointer.IDepartment",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".departments",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IDepartment>",
                                        value: input.departments,
                                    }));
                            const $ao2 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.time &&
                                    Number.isFinite(input.time)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".time",
                                        expected: "number",
                                        value: input.time,
                                    })) &&
                                (("number" === typeof input.zone &&
                                    Number.isFinite(input.zone)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".zone",
                                        expected: "number",
                                        value: input.zone,
                                    }));
                            const $ao3 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    })) &&
                                ("string" === typeof input.code ||
                                    $guard(_exceptionable, {
                                        path: _path + ".code",
                                        expected: "string",
                                        value: input.code,
                                    })) &&
                                (("number" === typeof input.sales &&
                                    Number.isFinite(input.sales)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".sales",
                                        expected: "number",
                                        value: input.sales,
                                    })) &&
                                (((("object" === typeof input.created_at &&
                                    null !== input.created_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                (((Array.isArray(input.employees) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employees",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IEmployee>",
                                        value: input.employees,
                                    })) &&
                                    input.employees.every(
                                        (elem: any, _index3: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".employees[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "ArrayHierarchicalPointer.IEmployee",
                                                    value: elem,
                                                })) &&
                                                $ao4(
                                                    elem,
                                                    _path +
                                                        ".employees[" +
                                                        _index3 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".employees[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ArrayHierarchicalPointer.IEmployee",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employees",
                                        expected:
                                            "Array<ArrayHierarchicalPointer.IEmployee>",
                                        value: input.employees,
                                    }));
                            const $ao4 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                (("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                (("number" === typeof input.age &&
                                    Number.isFinite(input.age)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".age",
                                        expected: "number",
                                        value: input.age,
                                    })) &&
                                (("number" === typeof input.grade &&
                                    Number.isFinite(input.grade)) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".grade",
                                        expected: "number",
                                        value: input.grade,
                                    })) &&
                                (((("object" === typeof input.employeed_at &&
                                    null !== input.employeed_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employeed_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.employeed_at,
                                    })) &&
                                    $ao2(
                                        input.employeed_at,
                                        _path + ".employeed_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".employeed_at",
                                        expected:
                                            "ArrayHierarchicalPointer.ITimestamp",
                                        value: input.employeed_at,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ArrayHierarchicalPointer",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ArrayHierarchicalPointer",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const clone = (
                    input: ArrayHierarchicalPointer,
                ): typia.Primitive<ArrayHierarchicalPointer> => {
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "number" === typeof input.serial &&
                        "string" === typeof input.name &&
                        "object" === typeof input.established_at &&
                        null !== input.established_at &&
                        $io2(input.established_at) &&
                        Array.isArray(input.departments) &&
                        input.departments.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        );
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.time &&
                        "number" === typeof input.zone;
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "string" === typeof input.code &&
                        "number" === typeof input.sales &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        $io2(input.created_at) &&
                        Array.isArray(input.employees) &&
                        input.employees.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io4(elem),
                        );
                    const $io4 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "string" === typeof input.name &&
                        "number" === typeof input.age &&
                        "number" === typeof input.grade &&
                        "object" === typeof input.employeed_at &&
                        null !== input.employeed_at &&
                        $io2(input.employeed_at);
                    const $cp0 = (input: any) =>
                        input.map((elem: any) =>
                            "object" === typeof elem && null !== elem
                                ? $co1(elem)
                                : (elem as any),
                        );
                    const $cp1 = (input: any) =>
                        input.map((elem: any) =>
                            "object" === typeof elem && null !== elem
                                ? $co3(elem)
                                : (elem as any),
                        );
                    const $cp2 = (input: any) =>
                        input.map((elem: any) =>
                            "object" === typeof elem && null !== elem
                                ? $co4(elem)
                                : (elem as any),
                        );
                    const $co0 = (input: any): any => ({
                        value: Array.isArray(input.value)
                            ? $cp0(input.value)
                            : (input.value as any),
                    });
                    const $co1 = (input: any): any => ({
                        id: input.id as any,
                        serial: input.serial as any,
                        name: input.name as any,
                        established_at:
                            "object" === typeof input.established_at &&
                            null !== input.established_at
                                ? $co2(input.established_at)
                                : (input.established_at as any),
                        departments: Array.isArray(input.departments)
                            ? $cp1(input.departments)
                            : (input.departments as any),
                    });
                    const $co2 = (input: any): any => ({
                        time: input.time as any,
                        zone: input.zone as any,
                    });
                    const $co3 = (input: any): any => ({
                        id: input.id as any,
                        code: input.code as any,
                        sales: input.sales as any,
                        created_at:
                            "object" === typeof input.created_at &&
                            null !== input.created_at
                                ? $co2(input.created_at)
                                : (input.created_at as any),
                        employees: Array.isArray(input.employees)
                            ? $cp2(input.employees)
                            : (input.employees as any),
                    });
                    const $co4 = (input: any): any => ({
                        id: input.id as any,
                        name: input.name as any,
                        age: input.age as any,
                        grade: input.grade as any,
                        employeed_at:
                            "object" === typeof input.employeed_at &&
                            null !== input.employeed_at
                                ? $co2(input.employeed_at)
                                : (input.employeed_at as any),
                    });
                    return "object" === typeof input && null !== input
                        ? $co0(input)
                        : (input as any);
                };
                assert(input);
                const output = clone(input);
                return output;
            })(input),
    );
