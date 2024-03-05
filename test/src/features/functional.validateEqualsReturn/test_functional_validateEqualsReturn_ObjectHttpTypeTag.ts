import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_validateEqualsReturn_ObjectHttpTypeTag =
  _test_functional_validateEqualsReturn("ObjectHttpTypeTag")(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
      typia.functional.validateEqualsReturn(p),
  );
