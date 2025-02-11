import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_equalsReturn_ObjectHttpAtomic = _test_functional_equalsReturn(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.equalsReturn(p),
)