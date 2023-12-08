import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_validateClone_ObjectUnionDouble =
  _test_misc_validateClone("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )((input) => typia.misc.validateClone<ObjectUnionDouble>(input));
