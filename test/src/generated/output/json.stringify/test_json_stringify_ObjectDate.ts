import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_stringify_ObjectDate = _test_json_stringify(
  "ObjectDate",
)<ObjectDate>(ObjectDate)((input) =>
  ((input: ObjectDate): string => {
    const $string = (typia.json.stringify as any).string;
    const $so0 = (input: any): any =>
      `{${
        undefined === input.classDate
          ? ""
          : `"classDate":${
              undefined !== input.classDate
                ? null !== input.classDate
                  ? $string(input.classDate.toJSON())
                  : "null"
                : undefined
            },`
      }"date":${
        null !== input.date ? $string(input.date) : "null"
      },"datetime":${
        null !== input.datetime ? $string(input.datetime) : "null"
      },"time":${
        null !== input.time ? $string(input.time) : "null"
      },"duration":${
        null !== input.duration ? $string(input.duration) : "null"
      }}`;
    return $so0(input);
  })(input),
);
