import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_isReturn_ObjectHttpAtomic = _test_functional_isReturn(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.isReturn(p),
)