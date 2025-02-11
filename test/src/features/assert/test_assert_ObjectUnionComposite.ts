import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assert_ObjectUnionComposite = _test_assert(TypeGuardError)(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.assert<ObjectUnionComposite>(input),
);
