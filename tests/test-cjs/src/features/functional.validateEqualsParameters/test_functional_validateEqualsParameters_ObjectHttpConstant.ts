import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsParameters_ObjectHttpConstant =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.validateEqualsParameters(p),
    );
