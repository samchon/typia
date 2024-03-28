import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_misc_createClone_ObjectUndefined = _test_misc_clone(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(
  (input: ObjectUndefined): import("typia").Resolved<ObjectUndefined> => {
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id && "string" === typeof input.name;
    const $any = (typia.misc.createClone as any).any;
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co0(elem) : (elem as any),
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
      unknown: $any(input.unknown),
      never: input.never as any,
    });
    const $co1 = (input: any): any => ({
      id: input.id as any,
      name: input.name as any,
    });
    return Array.isArray(input) ? $cp0(input) : (input as any);
  },
);
