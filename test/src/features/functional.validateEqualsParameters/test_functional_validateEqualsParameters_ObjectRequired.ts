import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateEqualsParameters_ObjectRequired =
  _test_functional_validateEqualsParameters("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.validateEqualsParameters(p),
  );
