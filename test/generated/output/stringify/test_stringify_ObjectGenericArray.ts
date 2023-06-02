import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_stringify_ObjectGenericArray = _test_stringify(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    (input) =>
        ((
            input: ObjectGenericArray.IPage<ObjectGenericArray.IPerson>,
        ): string => {
            const $io1: any = (input: any): boolean =>
                "number" === typeof input.page &&
                "number" === typeof input.limit &&
                "number" === typeof input.total_count &&
                "number" === typeof input.total_pages;
            const $io2: any = (input: any): boolean =>
                "string" === typeof input.name && "number" === typeof input.age;
            const $string: any = (typia.stringify as any).string;
            const $number: any = (typia.stringify as any).number;
            const $so0: any = (input: any): any =>
                `{"pagination":${$so1(input.pagination)},"data":${(() =>
                    `[${input.data
                        .map(
                            (elem: any) =>
                                `{"name":${$string(elem.name)},"age":${$number(
                                    elem.age,
                                )}}`,
                        )
                        .join(",")}]`)()}}`;
            const $so1: any = (input: any): any =>
                `{"page":${$number(input.page)},"limit":${$number(
                    input.limit,
                )},"total_count":${$number(
                    input.total_count,
                )},"total_pages":${$number(input.total_pages)}}`;
            return $so0(input);
        })(input),
);
