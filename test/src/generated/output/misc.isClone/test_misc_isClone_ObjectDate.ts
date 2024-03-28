import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_misc_isClone_ObjectDate = _test_misc_isClone(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) =>
  ((input: any): import("typia").Resolved<ObjectDate> | null => {
    const is = (input: any): input is ObjectDate => {
      const $io0 = (input: any): boolean =>
        (null === input.classDate ||
          undefined === input.classDate ||
          input.classDate instanceof Date) &&
        (null === input.date ||
          ("string" === typeof input.date &&
            /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date))) &&
        (null === input.datetime ||
          ("string" === typeof input.datetime &&
            !isNaN(new Date(input.datetime).getTime()))) &&
        (null === input.time ||
          ("string" === typeof input.time &&
            /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
              input.time,
            ))) &&
        (null === input.duration ||
          ("string" === typeof input.duration &&
            /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
              input.duration,
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    const clone = (input: ObjectDate): import("typia").Resolved<ObjectDate> => {
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
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
