import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertEqualsFunction_ObjectHttpUndefindable =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)(
      "ObjectHttpUndefindable",
    )(ObjectHttpUndefindable)(
      (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
        typia.functional.assertEqualsFunction(p),
    );
