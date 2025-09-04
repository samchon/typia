import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_assertParseCustom_ArrayRepeatedUnion = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ArrayRepeatedUnion",
  )<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
    typia.json.assertParse<ArrayRepeatedUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
