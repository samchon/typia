import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_createValidateClone_ObjectUnionCompositePointer =
  _test_misc_validateClone(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    typia.misc.createValidateClone<ObjectUnionCompositePointer>(),
  );
