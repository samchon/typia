import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_createAssertParseCustom_ArrayRepeatedNullable =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRepeatedNullable",
    )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
      typia.json.createAssertParse<ArrayRepeatedNullable>(
        (p) => new CustomGuardError(p),
      ),
    );
