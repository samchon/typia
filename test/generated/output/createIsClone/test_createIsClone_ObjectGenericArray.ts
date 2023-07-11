import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_createIsClone_ObjectGenericArray = _test_isClone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input: any): typia.Primitive<ObjectGenericArray> | null => {
        const is = (input: any): input is ObjectGenericArray => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.pagination &&
                null !== input.pagination &&
                "number" === typeof (input.pagination as any).page &&
                Number.isFinite((input.pagination as any).page) &&
                "number" === typeof (input.pagination as any).limit &&
                Number.isFinite((input.pagination as any).limit) &&
                "number" === typeof (input.pagination as any).total_count &&
                Number.isFinite((input.pagination as any).total_count) &&
                "number" === typeof (input.pagination as any).total_pages &&
                Number.isFinite((input.pagination as any).total_pages) &&
                Array.isArray(input.data) &&
                input.data.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (
            input: ObjectGenericArray,
        ): typia.Primitive<ObjectGenericArray> => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.page &&
                "number" === typeof input.limit &&
                "number" === typeof input.total_count &&
                "number" === typeof input.total_pages;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name && "number" === typeof input.age;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co2(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                pagination:
                    "object" === typeof input.pagination &&
                    null !== input.pagination
                        ? $co1(input.pagination)
                        : (input.pagination as any),
                data: Array.isArray(input.data)
                    ? $cp0(input.data)
                    : (input.data as any),
            });
            const $co1 = (input: any): any => ({
                page: input.page as any,
                limit: input.limit as any,
                total_count: input.total_count as any,
                total_pages: input.total_pages as any,
            });
            const $co2 = (input: any): any => ({
                name: input.name as any,
                age: input.age as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    ObjectGenericArray.SPOILERS,
);
