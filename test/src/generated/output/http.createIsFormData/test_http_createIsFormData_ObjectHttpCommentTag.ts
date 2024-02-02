import typia from "typia";

import { _test_http_isFormData } from "../../../internal/_test_http_isFormData";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createIsFormData_ObjectHttpCommentTag =
  _test_http_isFormData("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )((input: FormData): typia.Resolved<ObjectHttpCommentTag> | null => {
    const is = (input: any): input is ObjectHttpCommentTag => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.int &&
        Math.floor(input.int) === input.int &&
        -2147483648 <= input.int &&
        input.int <= 2147483647 &&
        "bigint" === typeof input.uint64 &&
        BigInt(0) <= input.uint64 &&
        "string" === typeof input.uuid &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          input.uuid,
        ) &&
        Array.isArray(input.items) &&
        10 <= input.items.length &&
        input.items.length <= 100 &&
        input.items.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const decode = (input: FormData): typia.Resolved<ObjectHttpCommentTag> => {
      const $number = (typia.http.createIsFormData as any).number;
      const $bigint = (typia.http.createIsFormData as any).bigint;
      const $string = (typia.http.createIsFormData as any).string;
      const output = {
        int: $number(input.get("int")),
        uint64: $bigint(input.get("uint64")),
        uuid: $string(input.get("uuid")),
        items: input.getAll("items").map((elem: any) => $number(elem)),
      };
      return output as any;
    };
    const output = decode(input);
    if (!is(output)) return null;
    return output;
  });
