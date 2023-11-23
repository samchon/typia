import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_assertClone_ObjectUnionCompositePointer =
  _test_misc_assertClone(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.misc.assertClone<ObjectUnionCompositePointer>(input),
  );
