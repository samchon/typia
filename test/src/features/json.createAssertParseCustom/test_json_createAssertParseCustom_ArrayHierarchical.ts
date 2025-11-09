import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createAssertParseCustom_ArrayHierarchical = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)(
    typia.json.createAssertParse<ArrayHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
