import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_isReturnAsync_ObjectSimpleProtobuf =
  _test_functional_isReturnAsync("ObjectSimpleProtobuf")(ObjectSimpleProtobuf)(
    (p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
      typia.functional.isReturn(p),
  );
