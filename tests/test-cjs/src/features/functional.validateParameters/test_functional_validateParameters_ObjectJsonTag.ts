import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateParameters_ObjectJsonTag = (): void =>
  _test_functional_validateParameters("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      typia.functional.validateParameters(p),
  );
