import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_assertCustom_ArraySimpleProtobuf = (): void =>
  _test_assert(CustomGuardError)("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )((input) =>
    typia.assert<ArraySimpleProtobuf>(input, (p) => new CustomGuardError(p)),
  );
