import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_misc_isPrune_ObjectGenericArray = _test_misc_isPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) =>
        ((
            input: any,
        ): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
            const is = (
                input: any,
            ): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const prune = (
                input: ObjectGenericArray.IPage<ObjectGenericArray.IPerson>,
            ): void => {
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.page &&
                    "number" === typeof input.limit &&
                    "number" === typeof input.total_count &&
                    "number" === typeof input.total_pages;
                const $io2 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po2(elem);
                    });
                const $po0 = (input: any): any => {
                    if (
                        "object" === typeof input.pagination &&
                        null !== input.pagination
                    )
                        $po1(input.pagination);
                    if (Array.isArray(input.data)) $pp0(input.data);
                    for (const key of Object.keys(input)) {
                        if ("pagination" === key || "data" === key) continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
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
                const $po2 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("name" === key || "age" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectGenericArray.SPOILERS,
);
