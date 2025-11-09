import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_assert_ArraySimpleProtobufOptional = (): void =>
  _test_assert(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)((input) =>
    typia.assert<ArraySimpleProtobufOptional>(input),
  );
