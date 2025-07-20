import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_createAssertStringify_ObjectUnionExplicitPointer =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.json.createAssertStringify<ObjectUnionExplicitPointer>(),
    );
