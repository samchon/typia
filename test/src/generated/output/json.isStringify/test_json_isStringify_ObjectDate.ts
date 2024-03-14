import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectDate } from "../../../structures/ObjectDate";
export const test_json_isStringify_ObjectDate = _test_json_isStringify(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) =>
  ((input: ObjectDate): string | null => {
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
    const stringify = (input: ObjectDate): string => {
      const $string = (typia.json.isStringify as any).string;
      const $so0 = (input: any): any =>
        `{${undefined === input.classDate ? "" : `"classDate":${undefined !== input.classDate ? (null !== input.classDate ? $string(input.classDate.toJSON()) : "null") : undefined},`}"date":${null !== input.date ? $string(input.date) : "null"},"datetime":${null !== input.datetime ? $string(input.datetime) : "null"},"time":${null !== input.time ? $string(input.time) : "null"},"duration":${null !== input.duration ? $string(input.duration) : "null"}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
