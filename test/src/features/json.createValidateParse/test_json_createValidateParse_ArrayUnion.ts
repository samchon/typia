import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_createValidateParse_ArrayUnion = (): void =>
  _test_json_validateParse("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.json.createValidateParse<ArrayUnion>(),
  );
