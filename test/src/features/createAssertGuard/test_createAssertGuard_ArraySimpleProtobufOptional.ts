import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createAssertGuard_ArraySimpleProtobufOptional = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)(
    typia.createAssertGuard<ArraySimpleProtobufOptional>(),
  );
