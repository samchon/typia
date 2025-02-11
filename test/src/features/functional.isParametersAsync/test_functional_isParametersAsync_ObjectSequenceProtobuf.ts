import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_isParametersAsync_ObjectSequenceProtobuf = _test_functional_isParametersAsync(
  "ObjectSequenceProtobuf"
)(ObjectSequenceProtobuf)(
  (p: (input: ObjectSequenceProtobuf) => Promise<ObjectSequenceProtobuf>) =>
    typia.functional.isParameters(p),
)