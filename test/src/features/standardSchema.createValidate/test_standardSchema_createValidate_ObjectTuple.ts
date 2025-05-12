import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_standardSchema_createValidate_ObjectTuple =
  _test_standardSchema_validate("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    typia.createValidate<ObjectTuple>(),
  );
