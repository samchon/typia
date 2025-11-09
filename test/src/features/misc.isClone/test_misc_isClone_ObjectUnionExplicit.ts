import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_misc_isClone_ObjectUnionExplicit = (): void =>
  _test_misc_isClone("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.misc.isClone<ObjectUnionExplicit>(input));
