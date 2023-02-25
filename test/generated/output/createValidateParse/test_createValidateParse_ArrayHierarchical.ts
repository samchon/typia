import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_ArrayHierarchical = _test_validateParse("ArrayHierarchical", ArrayHierarchical.generate, (input: string): typia.IValidation<typia.Primitive<ArrayHierarchical>> => { const validate = (input: any): typia.IValidation<ArrayHierarchical> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayHierarchical => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "number" === typeof input.serial || $report(_exceptionable, {
                path: _path + ".serial",
                expected: "number",
                value: input.serial
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), ("object" === typeof input.established_at && null !== input.established_at || $report(_exceptionable, {
                path: _path + ".established_at",
                expected: "Resolve<ArrayHierarchical.ITimestamp>",
                value: input.established_at
            })) && $vo1(input.established_at, _path + ".established_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".established_at",
                expected: "Resolve<ArrayHierarchical.ITimestamp>",
                value: input.established_at
            }), (Array.isArray(input.departments) || $report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<Resolve<ArrayHierarchical.IDepartment>>",
                value: input.departments
            })) && input.departments.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".departments[" + _index2 + "]",
                expected: "Resolve<ArrayHierarchical.IDepartment>",
                value: elem
            })) && $vo2(elem, _path + ".departments[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".departments[" + _index2 + "]",
                expected: "Resolve<ArrayHierarchical.IDepartment>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<Resolve<ArrayHierarchical.IDepartment>>",
                value: input.departments
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.time || $report(_exceptionable, {
                path: _path + ".time",
                expected: "number",
                value: input.time
            }), "number" === typeof input.zone || $report(_exceptionable, {
                path: _path + ".zone",
                expected: "number",
                value: input.zone
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.code || $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code
            }), "number" === typeof input.sales || $report(_exceptionable, {
                path: _path + ".sales",
                expected: "number",
                value: input.sales
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ArrayHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo1(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ArrayHierarchical.ITimestamp>",
                value: input.created_at
            }), (Array.isArray(input.employees) || $report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<Resolve<ArrayHierarchical.IEmployee>>",
                value: input.employees
            })) && input.employees.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".employees[" + _index3 + "]",
                expected: "Resolve<ArrayHierarchical.IEmployee>",
                value: elem
            })) && $vo3(elem, _path + ".employees[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".employees[" + _index3 + "]",
                expected: "Resolve<ArrayHierarchical.IEmployee>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<Resolve<ArrayHierarchical.IEmployee>>",
                value: input.employees
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.age || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }), "number" === typeof input.grade || $report(_exceptionable, {
                path: _path + ".grade",
                expected: "number",
                value: input.grade
            }), ("object" === typeof input.employeed_at && null !== input.employeed_at || $report(_exceptionable, {
                path: _path + ".employeed_at",
                expected: "Resolve<ArrayHierarchical.ITimestamp>",
                value: input.employeed_at
            })) && $vo1(input.employeed_at, _path + ".employeed_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".employeed_at",
                expected: "Resolve<ArrayHierarchical.ITimestamp>",
                value: input.employeed_at
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ArrayHierarchical.ICompany>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ArrayHierarchical.ICompany>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ArrayHierarchical.ICompany>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ArrayHierarchical.ICompany>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ArrayHierarchical>;
}; input = JSON.parse(input); const output = validate(input); return output; }, ArrayHierarchical.SPOILERS);
