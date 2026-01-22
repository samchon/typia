import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createAssertStringify_ObjectUnionCompositePointer =
  (): void =>
    _test_json_assertStringify(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.json.createAssertStringify<ObjectUnionCompositePointer>(),
    );
