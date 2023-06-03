import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_createIsPrune_ArrayHierarchical = _test_isPrune(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input: any): input is ArrayHierarchical => {
        const is = (input: any): input is ArrayHierarchical => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "number" === typeof input.serial &&
                Number.isFinite(input.serial) &&
                "string" === typeof input.name &&
                "object" === typeof input.established_at &&
                null !== input.established_at &&
                "number" === typeof (input.established_at as any).time &&
                Number.isFinite((input.established_at as any).time) &&
                "number" === typeof (input.established_at as any).zone &&
                Number.isFinite((input.established_at as any).zone) &&
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
                "number" === typeof (input.created_at as any).time &&
                Number.isFinite((input.created_at as any).time) &&
                "number" === typeof (input.created_at as any).zone &&
                Number.isFinite((input.created_at as any).zone) &&
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
                "number" === typeof (input.employeed_at as any).time &&
                Number.isFinite((input.employeed_at as any).time) &&
                "number" === typeof (input.employeed_at as any).zone &&
                Number.isFinite((input.employeed_at as any).zone);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
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
            const $pp0 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
            const $pp1 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            const $pp2 = (input: any) =>
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po3(elem);
                });
            const $po0 = (input: any): any => {
                if (
                    "object" === typeof input.established_at &&
                    null !== input.established_at
                )
                    $po1(input.established_at);
                if (Array.isArray(input.departments)) $pp1(input.departments);
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
                if (Array.isArray(input.employees)) $pp2(input.employees);
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
            if (Array.isArray(input)) $pp0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ArrayHierarchical.SPOILERS,
);
