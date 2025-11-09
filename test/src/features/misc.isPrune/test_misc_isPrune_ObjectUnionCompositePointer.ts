import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_isPrune_ObjectUnionCompositePointer = (): void =>
  _test_misc_isPrune(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    typia.misc.isPrune<ObjectUnionCompositePointer>(input),
  );
