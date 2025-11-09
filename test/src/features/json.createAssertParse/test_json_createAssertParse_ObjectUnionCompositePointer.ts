import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_json_createAssertParse_ObjectUnionCompositePointer =
  (): void =>
    _test_json_assertParse(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.json.createAssertParse<ObjectUnionCompositePointer>(),
    );
