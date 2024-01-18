import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_stringify_ObjectOptional = _test_json_stringify(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: ObjectOptional): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $tail = require("typia/lib/functional/$tail").$tail;
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
