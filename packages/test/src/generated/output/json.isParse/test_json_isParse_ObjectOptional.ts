import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_isParse_ObjectOptional = _test_json_isParse(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: any): typia.Primitive<ObjectOptional> => {
    const is = (input: any): input is ObjectOptional => {
      const $io0 = (input: any): boolean =>
        (undefined === input.id || "string" === typeof input.id) &&
        (undefined === input.name || "string" === typeof input.name) &&
        (undefined === input.email || "string" === typeof input.email) &&
        (undefined === input.sequence ||
          ("number" === typeof input.sequence &&
            Number.isFinite(input.sequence)));
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
