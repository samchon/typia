import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_createIsStringify_ObjectGenericArray = _test_isStringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input: ObjectGenericArray): string | null => {
        const is = (input: any): input is ObjectGenericArray => {
            const $io0 = (input: any): boolean =>
                "object" === typeof input.pagination &&
                null !== input.pagination &&
                $io1(input.pagination) &&
                Array.isArray(input.data) &&
                input.data.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.page &&
                Number.isFinite(input.page) &&
                "number" === typeof input.limit &&
                Number.isFinite(input.limit) &&
                "number" === typeof input.total_count &&
                Number.isFinite(input.total_count) &&
                "number" === typeof input.total_pages &&
                Number.isFinite(input.total_pages);
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: ObjectGenericArray): string => {
            const $string = (typia.createIsStringify as any).string;
            const $number = (typia.createIsStringify as any).number;
            const $io1 = (input: any): boolean =>
                "number" === typeof input.page &&
                "number" === typeof input.limit &&
                "number" === typeof input.total_count &&
                "number" === typeof input.total_pages;
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name && "number" === typeof input.age;
            const $so0 = (input: any): any =>
                `{"pagination":${$so1(input.pagination)},"data":${`[${input.data
                    .map(
                        (elem: any) =>
                            `{"name":${$string(elem.name)},"age":${$number(
                                elem.age,
                            )}}`,
                    )
                    .join(",")}]`}}`;
            const $so1 = (input: any): any =>
                `{"page":${$number(input.page)},"limit":${$number(
                    input.limit,
                )},"total_count":${$number(
                    input.total_count,
                )},"total_pages":${$number(input.total_pages)}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    ObjectGenericArray.SPOILERS,
);
