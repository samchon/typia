import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createAssert_ArraySimpleProtobufOptional = (): void =>
  _test_assert(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)(
    typia.createAssert<ArraySimpleProtobufOptional>(),
  );
