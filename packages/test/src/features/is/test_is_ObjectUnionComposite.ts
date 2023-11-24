import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_is_ObjectUnionComposite = _test_is(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  typia.is<ObjectUnionComposite>(input),
);
