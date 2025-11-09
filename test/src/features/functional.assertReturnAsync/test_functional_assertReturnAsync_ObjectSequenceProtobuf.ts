import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_assertReturnAsync_ObjectSequenceProtobuf =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)(
      "ObjectSequenceProtobuf",
    )(ObjectSequenceProtobuf)(
      (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
        typia.functional.assertReturn(p),
    );
