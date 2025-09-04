import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsReturn_ObjectUnionComposite =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.assertEqualsReturn(p),
    );
