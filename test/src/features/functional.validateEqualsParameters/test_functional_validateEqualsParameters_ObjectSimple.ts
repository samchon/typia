import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateEqualsParameters_ObjectSimple =
  _test_functional_validateEqualsParameters("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.validateEqualsParameters(p),
  );
