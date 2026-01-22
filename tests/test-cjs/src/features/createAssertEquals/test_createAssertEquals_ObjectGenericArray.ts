import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertEquals_ObjectGenericArray = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.createAssertEquals<ObjectGenericArray>());
