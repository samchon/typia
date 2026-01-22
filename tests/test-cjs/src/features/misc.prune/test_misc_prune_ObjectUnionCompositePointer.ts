import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_prune_ObjectUnionCompositePointer = (): void =>
  _test_misc_prune("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer,
  )((input) => typia.misc.prune<ObjectUnionCompositePointer>(input));
