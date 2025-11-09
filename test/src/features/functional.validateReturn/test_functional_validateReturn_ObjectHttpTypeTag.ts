import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_validateReturn_ObjectHttpTypeTag = (): void =>
  _test_functional_validateReturn("ObjectHttpTypeTag")(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
      typia.functional.validateReturn(p),
  );
