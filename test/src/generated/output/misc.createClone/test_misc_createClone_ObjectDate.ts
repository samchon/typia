import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_misc_createClone_ObjectDate = _test_misc_clone(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input: ObjectDate): typia.Resolved<ObjectDate> => {
  const $co0 = (input: any): any => ({
    classDate:
      input.classDate instanceof Date
        ? new Date(input.classDate)
        : (input.classDate as any),
    date: input.date as any,
    datetime: input.datetime as any,
    time: input.time as any,
    duration: input.duration as any,
  });
  return "object" === typeof input && null !== input
    ? $co0(input)
    : (input as any);
});
