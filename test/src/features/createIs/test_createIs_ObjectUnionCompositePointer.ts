import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createIs_ObjectUnionCompositePointer = _test_is(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
  typia.createIs<ObjectUnionCompositePointer>(),
);
