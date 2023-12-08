import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createEquals_ObjectUnionCompositePointer = _test_equals(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
  typia.createEquals<ObjectUnionCompositePointer>(),
);
