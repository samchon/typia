import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertEquals_ObjectGenericUnion = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.createAssertEquals<ObjectGenericUnion>());
