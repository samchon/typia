import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_isPrune_ObjectUnionExplicit = (): void =>
  _test_misc_isPrune("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.misc.isPrune<ObjectUnionExplicit>(input));
