import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_createIsPrune_ObjectGenericArray = _test_isPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input: any): input is ObjectGenericArray => {
        const is: any = (input: any): input is ObjectGenericArray => {
            const $io0: any = (input: any): boolean =>
                "object" === typeof input.pagination &&
                null !== input.pagination &&
                $io1(input.pagination) &&
                Array.isArray(input.data) &&
                input.data.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.page &&
                Number.isFinite(input.page) &&
                "number" === typeof input.limit &&
                Number.isFinite(input.limit) &&
                "number" === typeof input.total_count &&
                Number.isFinite(input.total_count) &&
                "number" === typeof input.total_pages &&
                Number.isFinite(input.total_pages);
            const $io2: any = (input: any): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune: any = (input: ObjectGenericArray): void => {
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.page &&
                "number" === typeof input.limit &&
                "number" === typeof input.total_count &&
                "number" === typeof input.total_pages;
            const $io2: any = (input: any): boolean =>
                "string" === typeof input.name && "number" === typeof input.age;
            const $po0: any = (input: any): any => {
                if (
                    "object" === typeof input.pagination &&
                    null !== input.pagination
                )
                    $po1(input.pagination);
                if (Array.isArray(input.data))
                    (() =>
                        input.data.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po2(elem);
                        }))();
                for (const key: any of Object.keys(input)) {
                    if ("pagination" === key || "data" === key) continue;
                    delete input[key];
                }
            };
            const $po1: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if (
                        "page" === key ||
                        "limit" === key ||
                        "total_count" === key ||
                        "total_pages" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po2: any = (input: any): any => {
                for (const key: any of Object.keys(input)) {
                    if ("name" === key || "age" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    ObjectGenericArray.SPOILERS,
);
