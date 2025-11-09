import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsFunction_ObjectUnionComposite =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectUnionComposite",
    )(ObjectUnionComposite)(
      (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
        typia.functional.assertEqualsFunction(p),
    );
