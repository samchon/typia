import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ObjectUnionCompositePointer =
  _test_misc_assertClone(TypeGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.misc.assertClone<ObjectUnionCompositePointer>(input),
  );
