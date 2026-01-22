import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertParametersAsync_ObjectSequenceProtobuf =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectSequenceProtobuf",
    )(ObjectSequenceProtobuf)(
      (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
        typia.functional.assertParameters(p),
    );
