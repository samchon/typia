import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_isClone_ArrayHierarchical = _test_isClone(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<Array<ArrayHierarchical.ICompany>> | null => {
            const is: any = (
                input: any,
            ): input is Array<ArrayHierarchical.ICompany> => {
                const $io0: any = (input: any): boolean =>
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
                const $io2: any = (input: any): boolean =>
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
                const $io3: any = (input: any): boolean =>
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
            const clone: any = (
                input: Array<ArrayHierarchical.ICompany>,
            ): typia.Primitive<Array<ArrayHierarchical.ICompany>> => {
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                const $io2: any = (input: any): boolean =>
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
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    "number" === typeof input.grade &&
                    "object" === typeof input.employeed_at &&
                    null !== input.employeed_at &&
                    $io1(input.employeed_at);
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    serial: input.serial as any,
                    name: input.name as any,
                    established_at:
                        "object" === typeof input.established_at &&
                        null !== input.established_at
                            ? $co1(input.established_at)
                            : (input.established_at as any),
                    departments: Array.isArray(input.departments)
                        ? (() =>
                              input.departments.map((elem: any) =>
                                  "object" === typeof elem && null !== elem
                                      ? $co2(elem)
                                      : (elem as any),
                              ))()
                        : (input.departments as any),
                });
                const $co1: any = (input: any): any => ({
                    time: input.time as any,
                    zone: input.zone as any,
                });
                const $co2: any = (input: any): any => ({
                    id: input.id as any,
                    code: input.code as any,
                    sales: input.sales as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co1(input.created_at)
                            : (input.created_at as any),
                    employees: Array.isArray(input.employees)
                        ? (() =>
                              input.employees.map((elem: any) =>
                                  "object" === typeof elem && null !== elem
                                      ? $co3(elem)
                                      : (elem as any),
                              ))()
                        : (input.employees as any),
                });
                const $co3: any = (input: any): any => ({
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
                    ? (() =>
                          input.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    ArrayHierarchical.SPOILERS,
);
