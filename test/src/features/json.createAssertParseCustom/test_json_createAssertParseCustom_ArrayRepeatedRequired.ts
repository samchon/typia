import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_json_createAssertParseCustom_ArrayRepeatedRequired =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayRepeatedRequired",
    )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
      typia.json.createAssertParse<ArrayRepeatedRequired>(
        (p) => new CustomGuardError(p),
      ),
    );
