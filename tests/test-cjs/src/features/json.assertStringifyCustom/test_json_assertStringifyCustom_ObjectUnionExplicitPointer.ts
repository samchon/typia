import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_assertStringifyCustom_ObjectUnionExplicitPointer =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
      typia.json.assertStringify<ObjectUnionExplicitPointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
