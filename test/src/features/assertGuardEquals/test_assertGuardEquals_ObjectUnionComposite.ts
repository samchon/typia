import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertGuardEquals_ObjectUnionComposite =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
    typia.assertGuardEquals<ObjectUnionComposite>(input),
  );
