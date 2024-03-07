import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ArrayHierarchicalPointer =
  _test_json_assertParse(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.json.assertParse<ArrayHierarchicalPointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
