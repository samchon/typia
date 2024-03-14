import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
export const test_json_createIsStringify_ObjectGenericArray =
  _test_json_isStringify("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input: ObjectGenericArray): string | null => {
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
    const stringify = (input: ObjectGenericArray): string => {
      const $io1 = (input: any): boolean =>
        "number" === typeof input.page &&
        "number" === typeof input.limit &&
        "number" === typeof input.total_count &&
        "number" === typeof input.total_pages;
      const $io2 = (input: any): boolean =>
        "string" === typeof input.name && "number" === typeof input.age;
      const $number = (typia.json.createIsStringify as any).number;
      const $string = (typia.json.createIsStringify as any).string;
      const $so0 = (input: any): any =>
        `{"pagination":${`{"page":${$number((input.pagination as any).page)},"limit":${$number((input.pagination as any).limit)},"total_count":${$number((input.pagination as any).total_count)},"total_pages":${$number((input.pagination as any).total_pages)}}`},"data":${`[${input.data.map((elem: any) => `{"name":${$string((elem as any).name)},"age":${$number((elem as any).age)}}`).join(",")}]`}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  });
