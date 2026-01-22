import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createAssertGuardCustom_ObjectSimpleProtobuf = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
    typia.createAssertGuard<ObjectSimpleProtobuf>(
      (p) => new CustomGuardError(p),
    ),
  );
