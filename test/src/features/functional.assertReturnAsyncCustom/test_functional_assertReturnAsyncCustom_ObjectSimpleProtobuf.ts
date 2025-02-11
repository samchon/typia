import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertReturnAsyncCustom_ObjectSimpleProtobuf =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectSimpleProtobuf")(
    ObjectSimpleProtobuf,
  )((p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
