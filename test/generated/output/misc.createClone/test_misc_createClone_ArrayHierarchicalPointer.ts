import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_misc_clone_ArrayHierarchicalPointer =
    _test_misc_clone<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        (
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
                        "object" === typeof elem && null !== elem && $io3(elem),
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
                        "object" === typeof elem && null !== elem && $io4(elem),
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
        },
    );
