import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectDate } from "../../../structures/ObjectDate";
export const test_functional_isReturn_ObjectDate = _test_functional_isReturn(
  "ObjectDate",
)(ObjectDate)(
  (p: (input: ObjectDate) => ObjectDate) =>
    (input: ObjectDate): ObjectDate | null => {
      const result = p(input);
      return ((input: any): input is ObjectDate => {
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
      })(result)
        ? result
        : null;
    },
);
