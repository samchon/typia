import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_createAssertGuardCustom_ObjectSimpleProtobufNullable =
  (): void =>
    _test_assertGuard(CustomGuardError)(
      "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)(
      typia.createAssertGuard<ObjectSimpleProtobufNullable>(
        (p) => new CustomGuardError(p),
      ),
    );
