import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertEqualsParameters_ObjectHttpUndefindable =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ObjectHttpUndefindable",
  )(ObjectHttpUndefindable)(
    (p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.assertEqualsParameters(p),
  );
