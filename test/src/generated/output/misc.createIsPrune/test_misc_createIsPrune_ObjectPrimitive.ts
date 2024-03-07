import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
export const test_misc_createIsPrune_ObjectPrimitive = _test_misc_isPrune(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input: any): input is ObjectPrimitive => {
  const is = (input: any): input is ObjectPrimitive => {
    const $io0 = (input: any): boolean =>
      "string" === typeof input.id &&
      ("txt" === input.extension ||
        "md" === input.extension ||
        "html" === input.extension) &&
      "string" === typeof input.title &&
      "string" === typeof input.body &&
      Array.isArray(input.files) &&
      input.files.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
      ) &&
      "boolean" === typeof input.secret &&
      "string" === typeof input.created_at;
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      "string" === typeof input.extension &&
      "string" === typeof input.url &&
      "string" === typeof input.created_at;
    return "object" === typeof input && null !== input && $io0(input);
  };
  const prune = (input: ObjectPrimitive): void => {
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
  };
  if (!is(input)) return false;
  prune(input);
  return true;
});
