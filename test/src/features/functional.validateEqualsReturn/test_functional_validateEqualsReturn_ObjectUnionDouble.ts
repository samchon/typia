import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateEqualsReturn_ObjectUnionDouble =
  _test_functional_validateEqualsReturn("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.validateEqualsReturn(p),
  );
