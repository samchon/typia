import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_misc_createIsClone_ObjectPrimitive = _test_misc_isClone(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(
  (input: any): typia.Resolved<ObjectPrimitive> | null => {
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
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
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
    const clone = (input: ObjectPrimitive): typia.Resolved<ObjectPrimitive> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.extension &&
        "string" === typeof input.url &&
        "string" === typeof input.created_at;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        id: input.id as any,
        extension: input.extension as any,
        title: input.title as any,
        body: input.body as any,
        files: Array.isArray(input.files)
          ? $cp0(input.files)
          : (input.files as any),
        secret: input.secret as any,
        created_at: input.created_at as any,
      });
      const $co1 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        extension: input.extension as any,
        url: input.url as any,
        created_at: input.created_at as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
