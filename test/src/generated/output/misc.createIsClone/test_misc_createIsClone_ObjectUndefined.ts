import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_misc_createIsClone_ObjectUndefined = _test_misc_isClone(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
  (input: any): typia.Resolved<ObjectUndefined> | null => {
    const is = (input: any): input is ObjectUndefined => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.name &&
        (undefined === input.professor ||
          "string" === typeof input.professor ||
          ("number" === typeof input.professor &&
            Number.isFinite(input.professor))) &&
        (undefined === input.classroom ||
          ("object" === typeof input.classroom &&
            null !== input.classroom &&
            $io1(input.classroom))) &&
        (undefined === input.grade ||
          ("number" === typeof input.grade && Number.isFinite(input.grade))) &&
        null !== input.nothing &&
        undefined === input.nothing &&
        true &&
        null !== input.never &&
        undefined === input.never;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id && "string" === typeof input.name;
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const clone = (input: ObjectUndefined): typia.Resolved<ObjectUndefined> => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id && "string" === typeof input.name;
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $clone = require("typia/lib/functional/$clone").$clone;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        name: input.name as any,
        professor: input.professor as any,
        classroom:
          "object" === typeof input.classroom && null !== input.classroom
            ? $co1(input.classroom)
            : (input.classroom as any),
        grade: input.grade as any,
        nothing: input.nothing as any,
        unknown: $clone(input.unknown),
        never: input.never as any,
      });
      const $co1 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
