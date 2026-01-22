import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createAssertGuardCustom_ObjectSimpleProtobufOptional =
  (): void =>
    _test_assertGuard(CustomGuardError)(
      "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)(
      typia.createAssertGuard<ObjectSimpleProtobufOptional>(
        (p) => new CustomGuardError(p),
      ),
    );
