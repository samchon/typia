import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assertEquals_ObjectUnionCompositePointer = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.assertEquals<ObjectUnionCompositePointer>(input),
  );
