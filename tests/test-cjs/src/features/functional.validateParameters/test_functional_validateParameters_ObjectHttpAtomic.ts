import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_validateParameters_ObjectHttpAtomic = (): void =>
  _test_functional_validateParameters("ObjectHttpAtomic")(ObjectHttpAtomic)(
    (p: (input: ObjectHttpAtomic) => ObjectHttpAtomic) =>
      typia.functional.validateParameters(p),
  );
