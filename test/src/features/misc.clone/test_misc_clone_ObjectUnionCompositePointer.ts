import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_clone_ObjectUnionCompositePointer = (): void =>
  _test_misc_clone("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer,
  )((input) => typia.misc.clone<ObjectUnionCompositePointer>(input));
