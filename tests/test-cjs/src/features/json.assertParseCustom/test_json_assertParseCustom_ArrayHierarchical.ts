import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_assertParseCustom_ArrayHierarchical = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.json.assertParse<ArrayHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
