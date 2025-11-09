import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsFunctionCustom_ObjectUnionDouble =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ObjectUnionDouble",
    )(ObjectUnionDouble)((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
