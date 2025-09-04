import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_isFunctionAsync_ObjectSequenceProtobuf =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectSequenceProtobuf")(
      ObjectSequenceProtobuf,
    )((p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
      typia.functional.isFunction(p),
    );
