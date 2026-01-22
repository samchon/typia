import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createEquals_ObjectGenericAlias = (): void =>
  _test_equals("ObjectGenericAlias")<ObjectGenericAlias>(ObjectGenericAlias)(
    typia.createEquals<ObjectGenericAlias>(),
  );
