import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_misc_prune_ObjectGenericArray = _test_misc_prune(
  "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)((input) =>
  ((input: ObjectGenericArray): void => {
    const $io1 = (input: any): boolean =>
      "number" === typeof input.page &&
      "number" === typeof input.limit &&
      "number" === typeof input.total_count &&
      "number" === typeof input.total_pages;
    const $io2 = (input: any): boolean =>
      "string" === typeof input.name && "number" === typeof input.age;
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po2(elem);
      });
    const $po0 = (input: any): any => {
      if ("object" === typeof input.pagination && null !== input.pagination)
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
  })(input),
);
