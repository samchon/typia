import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_misc_clone_ObjectGenericArray = _test_misc_clone(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
  ((input: ObjectGenericArray): typia.Resolved<ObjectGenericArray> => {
    const $io1 = (input: any): boolean =>
      "number" === typeof input.page &&
      "number" === typeof input.limit &&
      "number" === typeof input.total_count &&
      "number" === typeof input.total_pages;
    const $io2 = (input: any): boolean =>
      "string" === typeof input.name && "number" === typeof input.age;
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co2(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      pagination:
        "object" === typeof input.pagination && null !== input.pagination
          ? $co1(input.pagination)
          : (input.pagination as any),
      data: Array.isArray(input.data) ? $cp0(input.data) : (input.data as any),
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
  })(input),
);
