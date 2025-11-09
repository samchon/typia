import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createEquals_ObjectGeneric = (): void =>
  _test_equals("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.createEquals<ObjectGeneric>(),
  );
