import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createIs_ObjectGenericUnion = (): void =>
  _test_is("ObjectGenericUnion")<ObjectGenericUnion>(ObjectGenericUnion)(
    typia.createIs<ObjectGenericUnion>(),
  );
