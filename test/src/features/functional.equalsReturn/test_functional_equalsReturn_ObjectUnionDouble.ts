import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_equalsReturn_ObjectUnionDouble = (): void =>
  _test_functional_equalsReturn("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.equalsReturn(p),
  );
