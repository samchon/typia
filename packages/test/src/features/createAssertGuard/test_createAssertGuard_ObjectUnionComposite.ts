import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertGuard_ObjectUnionComposite = _test_assertGuard(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
  typia.createAssertGuard<ObjectUnionComposite>(),
);
