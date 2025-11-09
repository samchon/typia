import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_createEquals_ObjectPrimitive = (): void =>
  _test_equals("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
    typia.createEquals<ObjectPrimitive>(),
  );
