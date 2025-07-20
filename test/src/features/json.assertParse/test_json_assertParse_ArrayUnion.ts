import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_assertParse_ArrayUnion = (): void =>
  _test_json_assertParse(TypeGuardError)("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    (input) => typia.json.assertParse<ArrayUnion>(input),
  );
