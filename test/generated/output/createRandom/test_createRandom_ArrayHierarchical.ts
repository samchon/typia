import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_createRandom_ArrayHierarchical = _test_random(
    "ArrayHierarchical",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ArrayHierarchical> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            serial:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            established_at: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            departments: (generator?.array ?? $generator.array)(() =>
                $ro2(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        const $ro1 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            time:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            zone:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
        });
        const $ro2 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            code:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            sales:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            created_at: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
            employees: (generator?.array ?? $generator.array)(() =>
                $ro3(_recursive, _recursive ? 1 + _depth : _depth),
            ),
        });
        const $ro3 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            age:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            grade:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            employeed_at: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        });
        return (generator?.array ?? $generator.array)(() => $ro0());
    },
    (input: any): typia.Primitive<ArrayHierarchical> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ArrayHierarchical> => {
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
                        "object" === typeof elem && null !== elem && $io2(elem),
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
                        "object" === typeof elem && null !== elem && $io3(elem),
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
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ArrayHierarchical> => {
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
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
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
                                        _path + ".departments[" + _index2 + "]",
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
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
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
                                    path: _path + ".employees[" + _index3 + "]",
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
                            expected: "Resolve<ArrayHierarchical.ITimestamp>",
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
    },
);
