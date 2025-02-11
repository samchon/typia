import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_isReturnAsync_ObjectSequenceProtobuf = _test_functional_isReturnAsync(
  "ObjectSequenceProtobuf"
)(ObjectSequenceProtobuf)(
  (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
    typia.functional.isReturn(p),
)