import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_createAssert_ObjectSequenceProtobuf = (): void =>
  _test_assert(TypeGuardError)(
    "ObjectSequenceProtobuf",
  )<ObjectSequenceProtobuf>(ObjectSequenceProtobuf)(
    typia.createAssert<ObjectSequenceProtobuf>(),
  );
