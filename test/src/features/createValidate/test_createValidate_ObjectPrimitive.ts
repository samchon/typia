import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createValidate_ObjectPrimitive = (): void =>
  _test_validate("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.createValidate<ObjectPrimitive>(),
  );
