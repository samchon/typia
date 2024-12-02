import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_createAssertGuardCustom_ObjectSequenceProtobuf =
  _test_assertGuard(CustomGuardError)(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)(
    typia.createAssertGuard<ObjectSequenceProtobuf>(
      (p) => new CustomGuardError(p),
    ),
  );
