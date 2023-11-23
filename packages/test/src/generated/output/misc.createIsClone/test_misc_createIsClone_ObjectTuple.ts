import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_misc_createIsClone_ObjectTuple = _test_misc_isClone(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(
  (input: any): typia.Resolved<ObjectTuple> | null => {
    const is = (input: any): input is ObjectTuple => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.code &&
        "string" === typeof input.name;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.mobile &&
        "string" === typeof input.name;
      return (
        Array.isArray(input) &&
        input.length === 2 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1])
      );
    };
    const clone = (input: ObjectTuple): typia.Resolved<ObjectTuple> => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.code &&
        "string" === typeof input.name;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.mobile &&
        "string" === typeof input.name;
      const $co0 = (input: any): any => ({
        id: input.id as any,
        code: input.code as any,
        name: input.name as any,
      });
      const $co1 = (input: any): any => ({
        id: input.id as any,
        mobile: input.mobile as any,
        name: input.name as any,
      });
      return Array.isArray(input) &&
        input.length === 2 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io1(input[1])
        ? ([
            "object" === typeof input[0] && null !== input[0]
              ? $co0(input[0])
              : (input[0] as any),
            "object" === typeof input[1] && null !== input[1]
              ? $co1(input[1])
              : (input[1] as any),
          ] as any)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
