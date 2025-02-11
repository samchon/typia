import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_equalsReturnAsync_ObjectHttpAtomic =
  _test_functional_equalsReturnAsync("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.equalsReturn(p),
  );
