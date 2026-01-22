import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertReturnCustom_ObjectUnionComposite =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
