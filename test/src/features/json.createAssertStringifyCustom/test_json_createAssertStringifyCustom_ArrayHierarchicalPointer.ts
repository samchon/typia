import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_createAssertStringifyCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
      typia.json.createAssertStringify<ArrayHierarchicalPointer>(
        (p) => new CustomGuardError(p),
      ),
    );
