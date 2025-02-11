import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertParametersAsyncCustom_ObjectSequenceProtobuf =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ObjectSequenceProtobuf",
  )(ObjectSequenceProtobuf)(
    (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
