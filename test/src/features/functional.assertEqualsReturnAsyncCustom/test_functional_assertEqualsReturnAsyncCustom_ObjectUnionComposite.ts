import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ObjectUnionComposite =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectUnionComposite",
  )(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
