import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createAssertGuardCustom_ArraySimpleProtobufOptional =
  _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)(
    typia.createAssertGuard<ArraySimpleProtobufOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
