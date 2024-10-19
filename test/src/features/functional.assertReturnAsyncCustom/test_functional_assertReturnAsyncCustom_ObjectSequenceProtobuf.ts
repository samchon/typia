import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertReturnAsyncCustom_ObjectSequenceProtobuf =
  _test_functional_assertReturnAsync(CustomGuardError)(
    "ObjectSequenceProtobuf",
  )(ObjectSequenceProtobuf)(
    (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
