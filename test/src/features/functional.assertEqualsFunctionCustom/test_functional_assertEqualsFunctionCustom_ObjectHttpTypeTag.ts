import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertEqualsFunctionCustom_ObjectHttpTypeTag =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ObjectHttpTypeTag",
    )(ObjectHttpTypeTag)((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
