import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_isReturn_ObjectSequenceProtobuf =
  _test_functional_isReturn("ObjectSequenceProtobuf")(ObjectSequenceProtobuf)(
    (p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
      typia.functional.isReturn(p),
  );
