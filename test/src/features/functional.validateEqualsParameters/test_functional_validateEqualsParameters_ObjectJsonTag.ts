import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateEqualsParameters_ObjectJsonTag =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectJsonTag")(ObjectJsonTag)(
      (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
        typia.functional.validateEqualsParameters(p),
    );
