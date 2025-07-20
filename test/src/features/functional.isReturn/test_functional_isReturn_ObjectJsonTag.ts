import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_isReturn_ObjectJsonTag = (): void =>
  _test_functional_isReturn("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      typia.functional.isReturn(p),
  );
