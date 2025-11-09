import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_assertGuardCustom_ArraySimpleProtobufOptional = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)((input) =>
    typia.assertGuard<ArraySimpleProtobufOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
