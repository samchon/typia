import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createAssertEquals_ObjectUnionCompositePointer =
  _test_assertEquals(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.createAssertEquals<ObjectUnionCompositePointer>(),
  );
