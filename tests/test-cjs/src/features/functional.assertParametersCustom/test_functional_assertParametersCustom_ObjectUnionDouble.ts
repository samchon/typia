import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertParametersCustom_ObjectUnionDouble =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ObjectUnionDouble")(
      ObjectUnionDouble,
    )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
