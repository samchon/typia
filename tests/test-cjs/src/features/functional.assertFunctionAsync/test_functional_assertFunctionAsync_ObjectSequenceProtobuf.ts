import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertFunctionAsync_ObjectSequenceProtobuf =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ObjectSequenceProtobuf",
    )(ObjectSequenceProtobuf)(
      (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
        typia.functional.assertFunction(p),
    );
