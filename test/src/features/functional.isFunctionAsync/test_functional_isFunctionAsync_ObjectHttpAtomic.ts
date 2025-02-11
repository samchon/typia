import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_isFunctionAsync_ObjectHttpAtomic =
  _test_functional_isFunctionAsync("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.isFunction(p),
  );
