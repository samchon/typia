import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertReturnAsyncCustom_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ObjectUnionComposite",
    )(ObjectUnionComposite)(
      (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
