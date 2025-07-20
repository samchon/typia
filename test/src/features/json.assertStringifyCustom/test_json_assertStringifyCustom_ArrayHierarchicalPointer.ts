import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_json_assertStringifyCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
      typia.json.assertStringify<ArrayHierarchicalPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
