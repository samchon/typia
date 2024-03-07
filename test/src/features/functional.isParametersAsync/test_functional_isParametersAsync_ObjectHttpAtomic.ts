import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_isParametersAsync_ObjectHttpAtomic =
  _test_functional_isParametersAsync("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      typia.functional.isParameters(p),
  );
