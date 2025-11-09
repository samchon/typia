import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_assertCustom_ObjectSimpleProtobuf = (): void =>
  _test_assert(CustomGuardError)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )((input) =>
    typia.assert<ObjectSimpleProtobuf>(input, (p) => new CustomGuardError(p)),
  );
