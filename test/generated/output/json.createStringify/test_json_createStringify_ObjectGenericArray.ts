import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_stringify_ObjectGenericArray = _test_json_stringify(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)(
    (input: ObjectGenericArray): string => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.page &&
            "number" === typeof input.limit &&
            "number" === typeof input.total_count &&
            "number" === typeof input.total_pages;
        const $io2 = (input: any): boolean =>
            "string" === typeof input.name && "number" === typeof input.age;
        const $number = (typia.json.createStringify as any).number;
        const $string = (typia.json.createStringify as any).string;
        const $so0 = (input: any): any =>
            `{"pagination":${`{"page":${$number(
                (input.pagination as any).page,
            )},"limit":${$number(
                (input.pagination as any).limit,
            )},"total_count":${$number(
                (input.pagination as any).total_count,
            )},"total_pages":${$number(
                (input.pagination as any).total_pages,
            )}}`},"data":${`[${input.data
                .map(
                    (elem: any) =>
                        `{"name":${$string((elem as any).name)},"age":${$number(
                            (elem as any).age,
                        )}}`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    },
);
