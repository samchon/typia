import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_createAssertParseCustom_ArrayAtomicAlias =
  _test_json_assertParse(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)(
    typia.json.createAssertParse<ArrayAtomicAlias>(
      (p) => new CustomGuardError(p),
    ),
  );
