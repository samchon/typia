import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_validateParameters_ObjectHttpConstant = (): void =>
  _test_functional_validateParameters("ObjectHttpConstant")(ObjectHttpConstant)(
    (p: (input: ObjectHttpConstant) => ObjectHttpConstant) =>
      typia.functional.validateParameters(p),
  );
