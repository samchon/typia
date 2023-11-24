import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_is_ObjectOptional = _test_is(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: any): input is ObjectOptional => {
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
  })(input),
);
