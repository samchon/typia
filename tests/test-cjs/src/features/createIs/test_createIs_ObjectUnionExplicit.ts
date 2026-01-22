import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createIs_ObjectUnionExplicit = (): void =>
  _test_is("ObjectUnionExplicit")<ObjectUnionExplicit>(ObjectUnionExplicit)(
    typia.createIs<ObjectUnionExplicit>(),
  );
