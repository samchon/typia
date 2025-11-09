import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createAssertParseCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_json_assertParse(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
      typia.json.createAssertParse<ArrayHierarchicalPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
