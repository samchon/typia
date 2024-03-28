import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_misc_createIsClone_ObjectAlias = _test_misc_isClone(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(
  (input: any): import("typia").Resolved<ObjectAlias> | null => {
    const is = (input: any): input is ObjectAlias => {
      const $io0 = (input: any): boolean =>
        (null === input.id || "string" === typeof input.id) &&
        "string" === typeof input.email &&
        "string" === typeof input.name &&
        (null === input.sex ||
          1 === input.sex ||
          2 === input.sex ||
          "female" === input.sex ||
          "male" === input.sex) &&
        (null === input.age ||
          ("number" === typeof input.age && Number.isFinite(input.age))) &&
        (null === input.dead || "boolean" === typeof input.dead);
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const clone = (
      input: ObjectAlias,
    ): import("typia").Resolved<ObjectAlias> => {
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        id: input.id as any,
        email: input.email as any,
        name: input.name as any,
        sex: input.sex as any,
        age: input.age as any,
        dead: input.dead as any,
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
