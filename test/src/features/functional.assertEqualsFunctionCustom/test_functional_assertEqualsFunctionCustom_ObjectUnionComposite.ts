import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertEqualsFunctionCustom_ObjectUnionComposite =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ObjectUnionComposite",
    )(ObjectUnionComposite)(
      (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
