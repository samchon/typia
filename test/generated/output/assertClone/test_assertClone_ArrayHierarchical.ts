import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_assertClone_ArrayHierarchical = _test_assertClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ArrayHierarchical.ICompany>> => {
            const assert = (input: any): Array<ArrayHierarchical.ICompany> => {
                const $guard = (typia.assertClone as any).guard;
                const __is = (
                    input: any,
                ): input is Array<ArrayHierarchical.ICompany> => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "number" === typeof input.serial &&
                        Number.isFinite(input.serial) &&
                        "string" === typeof input.name &&
                        "object" === typeof input.established_at &&
                        null !== input.established_at &&
                        "number" === typeof input.established_at.time &&
                        Number.isFinite(input.established_at.time) &&
                        "number" === typeof input.established_at.zone &&
                        Number.isFinite(input.established_at.zone) &&
                        Array.isArray(input.departments) &&
                        input.departments.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        );
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "number" === typeof input.sales &&
                        Number.isFinite(input.sales) &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone) &&
                        Array.isArray(input.employees) &&
                        input.employees.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        );
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "number" === typeof input.age &&
                        Number.isFinite(input.age) &&
                        "number" === typeof input.grade &&
                        Number.isFinite(input.grade) &&
                        "object" === typeof input.employeed_at &&
                        null !== input.employeed_at &&
                        "number" === typeof input.employeed_at.time &&
                        Number.isFinite(input.employeed_at.time) &&
                        "number" === typeof input.employeed_at.zone &&
                        Number.isFinite(input.employeed_at.zone);
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ArrayHierarchical.ICompany> => {
                        const $ao0 = (
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
                            (("object" === typeof input.established_at &&
                                null !== input.established_at) ||
                                $guard(_exceptionable, {
                                    path: _path + ".established_at",
                                    expected: "ArrayHierarchical.ITimestamp",
                                    value: input.established_at,
                                })) &&
                            $ao1(
                                input.established_at,
                                _path + ".established_at",
                                true && _exceptionable,
                            ) &&
                            (Array.isArray(input.departments) ||
                                $guard(_exceptionable, {
                                    path: _path + ".departments",
                                    expected:
                                        "Array<ArrayHierarchical.IDepartment>",
                                    value: input.departments,
                                })) &&
                            input.departments.every(
                                (elem: any, _index2: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".departments[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ArrayHierarchical.IDepartment",
                                            value: elem,
                                        })) &&
                                    $ao2(
                                        elem,
                                        _path + ".departments[" + _index2 + "]",
                                        true && _exceptionable,
                                    ),
                            );
                        const $ao1 = (
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
                        const $ao2 = (
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
                            (("object" === typeof input.created_at &&
                                null !== input.created_at) ||
                                $guard(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected: "ArrayHierarchical.ITimestamp",
                                    value: input.created_at,
                                })) &&
                            $ao1(
                                input.created_at,
                                _path + ".created_at",
                                true && _exceptionable,
                            ) &&
                            (Array.isArray(input.employees) ||
                                $guard(_exceptionable, {
                                    path: _path + ".employees",
                                    expected:
                                        "Array<ArrayHierarchical.IEmployee>",
                                    value: input.employees,
                                })) &&
                            input.employees.every(
                                (elem: any, _index3: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".employees[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "ArrayHierarchical.IEmployee",
                                            value: elem,
                                        })) &&
                                    $ao3(
                                        elem,
                                        _path + ".employees[" + _index3 + "]",
                                        true && _exceptionable,
                                    ),
                            );
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
                            (("object" === typeof input.employeed_at &&
                                null !== input.employeed_at) ||
                                $guard(_exceptionable, {
                                    path: _path + ".employeed_at",
                                    expected: "ArrayHierarchical.ITimestamp",
                                    value: input.employeed_at,
                                })) &&
                            $ao1(
                                input.employeed_at,
                                _path + ".employeed_at",
                                true && _exceptionable,
                            );
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<ArrayHierarchical.ICompany>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "ArrayHierarchical.ICompany",
                                            value: elem,
                                        })) &&
                                    $ao0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<ArrayHierarchical.ICompany>,
            ): typia.Primitive<Array<ArrayHierarchical.ICompany>> => {
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io3(elem),
                    );
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    "number" === typeof input.grade &&
                    "object" === typeof input.employeed_at &&
                    null !== input.employeed_at &&
                    $io1(input.employeed_at);
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    serial: input.serial as any,
                    name: input.name as any,
                    established_at:
                        "object" === typeof input.established_at &&
                        null !== input.established_at
                            ? $co1(input.established_at)
                            : (input.established_at as any),
                    departments: Array.isArray(input.departments)
                        ? input.departments.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co2(elem)
                                  : (elem as any),
                          )
                        : (input.departments as any),
                });
                const $co1 = (input: any): any => ({
                    time: input.time as any,
                    zone: input.zone as any,
                });
                const $co2 = (input: any): any => ({
                    id: input.id as any,
                    code: input.code as any,
                    sales: input.sales as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co1(input.created_at)
                            : (input.created_at as any),
                    employees: Array.isArray(input.employees)
                        ? input.employees.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co3(elem)
                                  : (elem as any),
                          )
                        : (input.employees as any),
                });
                const $co3 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    age: input.age as any,
                    grade: input.grade as any,
                    employeed_at:
                        "object" === typeof input.employeed_at &&
                        null !== input.employeed_at
                            ? $co1(input.employeed_at)
                            : (input.employeed_at as any),
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ArrayHierarchical.SPOILERS,
);
