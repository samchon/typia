import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_is_ObjectGenericArray = _test_is(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)(
    (input: any): input is ObjectGenericArray => {
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
    },
);
