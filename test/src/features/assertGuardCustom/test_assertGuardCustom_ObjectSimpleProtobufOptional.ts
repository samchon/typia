import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_assertGuardCustom_ObjectSimpleProtobufOptional =
  _test_assertGuard(CustomGuardError)(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)((input) =>
    typia.assertGuard<ObjectSimpleProtobufOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
