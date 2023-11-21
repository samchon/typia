import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_misc_prune_ObjectPrimitive = _test_misc_prune(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  ((input: ObjectPrimitive): void => {
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      "string" === typeof input.extension &&
      "string" === typeof input.url &&
      "string" === typeof input.created_at;
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po1(elem);
      });
    const $po0 = (input: any): any => {
      if (Array.isArray(input.files)) $pp0(input.files);
      for (const key of Object.keys(input)) {
        if (
          "id" === key ||
          "extension" === key ||
          "title" === key ||
          "body" === key ||
          "files" === key ||
          "secret" === key ||
          "created_at" === key
        )
          continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "id" === key ||
          "name" === key ||
          "extension" === key ||
          "url" === key ||
          "created_at" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
