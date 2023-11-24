import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_stringify_ObjectOptional = _test_json_stringify(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: ObjectOptional): string => {
    const $string = (typia.json.stringify as any).string;
    const $number = (typia.json.stringify as any).number;
    const $tail = (typia.json.stringify as any).tail;
    const $so0 = (input: any): any =>
      `{${$tail(
        `${
          undefined === input.id
            ? ""
            : `"id":${undefined !== input.id ? $string(input.id) : undefined},`
        }${
          undefined === input.name
            ? ""
            : `"name":${
                undefined !== input.name ? $string(input.name) : undefined
              },`
        }${
          undefined === input.email
            ? ""
            : `"email":${
                undefined !== input.email ? $string(input.email) : undefined
              },`
        }${
          undefined === input.sequence
            ? ""
            : `"sequence":${
                undefined !== input.sequence
                  ? $number(input.sequence)
                  : undefined
              }`
        }`,
      )}}`;
    return $so0(input);
  })(input),
);
