import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_equalsReturn_ObjectHttpConstant = (): void =>
  _test_functional_equalsReturn("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.equalsReturn(p),
  );
