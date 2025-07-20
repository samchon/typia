import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createEquals_ObjectDescription = (): void =>
  _test_equals("ObjectDescription")<ObjectDescription>(ObjectDescription)(
    typia.createEquals<ObjectDescription>(),
  );
