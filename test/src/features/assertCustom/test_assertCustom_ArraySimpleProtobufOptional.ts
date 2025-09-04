import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_assertCustom_ArraySimpleProtobufOptional = (): void =>
  _test_assert(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)((input) =>
    typia.assert<ArraySimpleProtobufOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
