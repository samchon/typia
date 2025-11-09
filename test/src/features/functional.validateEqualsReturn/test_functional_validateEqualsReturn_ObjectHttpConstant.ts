import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsReturn_ObjectHttpConstant =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectHttpConstant")(
      ObjectHttpConstant,
    )((p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.validateEqualsReturn(p),
    );
