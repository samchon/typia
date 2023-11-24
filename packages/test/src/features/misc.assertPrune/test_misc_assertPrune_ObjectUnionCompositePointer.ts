import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_assertPrune_ObjectUnionCompositePointer =
  _test_misc_assertPrune(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.misc.assertPrune<ObjectUnionCompositePointer>(input),
  );
