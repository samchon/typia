import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_equals_ObjectUnionComposite = _test_equals(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.equals<ObjectUnionComposite>(input),
);
