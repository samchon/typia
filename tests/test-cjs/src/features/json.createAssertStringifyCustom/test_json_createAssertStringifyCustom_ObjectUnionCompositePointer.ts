import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createAssertStringifyCustom_ObjectUnionCompositePointer =
  (): void =>
    _test_json_assertStringify(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.json.createAssertStringify<ObjectUnionCompositePointer>(
        (p) => new CustomGuardError(p),
      ),
    );
