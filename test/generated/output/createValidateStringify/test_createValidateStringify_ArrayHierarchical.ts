import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_createValidateStringify_ArrayHierarchical =
    _test_validateStringify(
        "ArrayHierarchical",
        ArrayHierarchical.generate,
        (input: ArrayHierarchical): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ArrayHierarchical> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
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
                                    expected:
                                        "Resolve<ArrayHierarchical.ITimestamp>",
                                    value: input.established_at,
                                })) &&
                                $vo1(
                                    input.established_at,
                                    _path + ".established_at",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".established_at",
                                    expected:
                                        "Resolve<ArrayHierarchical.ITimestamp>",
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
                                    expected:
                                        "Resolve<ArrayHierarchical.ITimestamp>",
                                    value: input.created_at,
                                })) &&
                                $vo1(
                                    input.created_at,
                                    _path + ".created_at",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".created_at",
                                    expected:
                                        "Resolve<ArrayHierarchical.ITimestamp>",
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
                                    expected:
                                        "Resolve<ArrayHierarchical.ITimestamp>",
                                    value: input.employeed_at,
                                })) &&
                                $vo1(
                                    input.employeed_at,
                                    _path + ".employeed_at",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".employeed_at",
                                    expected:
                                        "Resolve<ArrayHierarchical.ITimestamp>",
                                    value: input.employeed_at,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<Resolve<ArrayHierarchical.ICompany>>",
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
                            expected:
                                "Array<Resolve<ArrayHierarchical.ICompany>>",
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
            const stringify = (input: ArrayHierarchical): string => {
                const $number = (typia.createValidateStringify as any).number;
                const $string = (typia.createValidateStringify as any).string;
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
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ArrayHierarchical.SPOILERS,
    );
