import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsReturnAsync_ObjectUnionComposite =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectUnionComposite",
  )(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.assertEqualsReturn(p),
  );
