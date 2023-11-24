import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_createAssertClone_ObjectUnionComposite =
  _test_misc_assertClone("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )(typia.misc.createAssertClone<ObjectUnionComposite>());
