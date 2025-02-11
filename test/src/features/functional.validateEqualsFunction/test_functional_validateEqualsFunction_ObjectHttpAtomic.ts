import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_validateEqualsFunction_ObjectHttpAtomic =
  _test_functional_validateEqualsFunction("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
      typia.functional.validateEqualsFunction(p),
  );
