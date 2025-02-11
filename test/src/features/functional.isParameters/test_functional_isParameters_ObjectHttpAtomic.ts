import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_isParameters_ObjectHttpAtomic =
  _test_functional_isParameters("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
      typia.functional.isParameters(p),
  );
