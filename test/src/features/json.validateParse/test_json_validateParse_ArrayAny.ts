import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_validateParse_ArrayAny = (): void =>
  _test_json_validateParse("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
    typia.json.validateParse<ArrayAny>(input),
  );
