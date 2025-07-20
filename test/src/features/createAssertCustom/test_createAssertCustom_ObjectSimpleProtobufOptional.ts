import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createAssertCustom_ObjectSimpleProtobufOptional = (): void =>
  _test_assert(CustomGuardError)(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)(
    typia.createAssert<ObjectSimpleProtobufOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
