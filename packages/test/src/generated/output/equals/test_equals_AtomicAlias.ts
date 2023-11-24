import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_equals_AtomicAlias = _test_equals("AtomicAlias")<AtomicAlias>(
  AtomicAlias,
)((input) =>
  ((input: any, _exceptionable: boolean = true): input is AtomicAlias => {
    return (
      Array.isArray(input) &&
      input.length === 3 &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      Number.isFinite(input[1]) &&
      "string" === typeof input[2]
    );
  })(input),
);
