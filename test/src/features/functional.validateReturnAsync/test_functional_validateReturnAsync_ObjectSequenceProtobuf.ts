import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_validateReturnAsync_ObjectSequenceProtobuf =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectSequenceProtobuf")(
      ObjectSequenceProtobuf,
    )((p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
      typia.functional.validateReturn(p),
    );
