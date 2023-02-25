import typia from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ArrayHierarchical =
    _test_assertStringify(
        "ArrayHierarchical",
        ArrayHierarchical.generate,
        (input: any): string => {
            const assert = (input: any): ArrayHierarchical => {
                const $guard = (typia.createAssertStringify as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayHierarchical => {
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
                                expected:
                                    "Resolve<ArrayHierarchical.ITimestamp>",
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
                                    "Array<Resolve<ArrayHierarchical.IDepartment>>",
                                value: input.departments,
                            })) &&
                        input.departments.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".departments[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "Resolve<ArrayHierarchical.IDepartment>",
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
                                expected:
                                    "Resolve<ArrayHierarchical.ITimestamp>",
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
                                    "Array<Resolve<ArrayHierarchical.IEmployee>>",
                                value: input.employees,
                            })) &&
                        input.employees.every(
                            (elem: any, _index3: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".employees[" +
                                            _index3 +
                                            "]",
                                        expected:
                                            "Resolve<ArrayHierarchical.IEmployee>",
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
                                expected:
                                    "Resolve<ArrayHierarchical.ITimestamp>",
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
                                    "Array<Resolve<ArrayHierarchical.ICompany>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "Resolve<ArrayHierarchical.ICompany>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: ArrayHierarchical): string => {
                const $number = (typia.createAssertStringify as any).number;
                const $string = (typia.createAssertStringify as any).string;
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
                const $so0 = (input: any): any =>
                    `{"id":${$number(input.id)},"serial":${$number(
                        input.serial,
                    )},"name":${$string(
                        input.name,
                    )},"established_at":${`{"time":${$number(
                        input.established_at.time,
                    )},"zone":${$number(
                        input.established_at.zone,
                    )}}`},"departments":${`[${input.departments
                        .map((elem: any) => $so2(elem))
                        .join(",")}]`}}`;
                const $so2 = (input: any): any =>
                    `{"id":${$number(input.id)},"code":${$string(
                        input.code,
                    )},"sales":${$number(
                        input.sales,
                    )},"created_at":${`{"time":${$number(
                        input.created_at.time,
                    )},"zone":${$number(
                        input.created_at.zone,
                    )}}`},"employees":${`[${input.employees
                        .map((elem: any) => $so3(elem))
                        .join(",")}]`}}`;
                const $so3 = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"age":${$number(input.age)},"grade":${$number(
                        input.grade,
                    )},"employeed_at":${`{"time":${$number(
                        input.employeed_at.time,
                    )},"zone":${$number(input.employeed_at.zone)}}`}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            return stringify(assert(input));
        },
        ArrayHierarchical.SPOILERS,
    );
