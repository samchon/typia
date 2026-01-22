import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_createIs_ObjectDescription = (): void =>
  _test_is("ObjectDescription")<ObjectDescription>(ObjectDescription)(
    typia.createIs<ObjectDescription>(),
  );
