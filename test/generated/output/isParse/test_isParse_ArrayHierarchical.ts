import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_isParse_ArrayHierarchical = _test_isParse(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ArrayHierarchical.ICompany>> => {
            const is = (input: any): input is ArrayHierarchical => {
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
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    ArrayHierarchical.SPOILERS,
);
