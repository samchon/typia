import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_validateParameters_ObjectSequenceProtobuf =
  _test_functional_validateParameters("ObjectSequenceProtobuf")(
    ObjectSequenceProtobuf,
  )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
    typia.functional.validateParameters(p),
  );
