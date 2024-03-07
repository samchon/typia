import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_validateEqualsFunctionAsync_ObjectHttpAtomic =
  _test_functional_validateEqualsFunctionAsync("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )((p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
    typia.functional.validateEqualsFunction(p),
  );
