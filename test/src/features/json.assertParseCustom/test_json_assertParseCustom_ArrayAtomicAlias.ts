import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_assertParseCustom_ArrayAtomicAlias =
  _test_json_assertParse(CustomGuardError)(
    "ArrayAtomicAlias",
  )<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
    typia.json.assertParse<ArrayAtomicAlias>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
