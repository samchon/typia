import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_assertGuardCustom_ObjectSimpleProtobufNullable =
  _test_assertGuard(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
  )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)((input) =>
    typia.assertGuard<ObjectSimpleProtobufNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
