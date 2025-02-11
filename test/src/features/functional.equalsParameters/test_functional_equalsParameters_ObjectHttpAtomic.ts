import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_equalsParameters_ObjectHttpAtomic = _test_functional_equalsParameters(
  "ObjectHttpAtomic"
)(ObjectHttpAtomic)(
  (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) => typia.functional.equalsParameters(p),
)