import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_validateParametersAsync_ObjectSequenceProtobuf =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectSequenceProtobuf")(
      ObjectSequenceProtobuf,
    )((p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
      typia.functional.validateParameters(p),
    );
