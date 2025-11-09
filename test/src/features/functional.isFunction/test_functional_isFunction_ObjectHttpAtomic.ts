import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_isFunction_ObjectHttpAtomic = (): void => _test_functional_isFunction(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.isFunction(p),
)