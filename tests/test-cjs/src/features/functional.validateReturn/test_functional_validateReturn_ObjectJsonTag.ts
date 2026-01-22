import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_validateReturn_ObjectJsonTag = (): void =>
  _test_functional_validateReturn("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      typia.functional.validateReturn(p),
  );
