import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertCustom_ObjectGenericUnion = (): void =>
  _test_assert(CustomGuardError)("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )(typia.createAssert<ObjectGenericUnion>((p) => new CustomGuardError(p)));
