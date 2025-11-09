import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createIs_ObjectGeneric = (): void =>
  _test_is("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.createIs<ObjectGeneric>(),
  );
