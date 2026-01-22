import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertEqualsParametersCustom_ObjectHttpTypeTag =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ObjectHttpTypeTag",
    )(ObjectHttpTypeTag)((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
