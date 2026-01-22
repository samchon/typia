import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_functional_isParameters_ObjectSequenceProtobuf = (): void =>
  _test_functional_isParameters("ObjectSequenceProtobuf")(
    ObjectSequenceProtobuf,
  )((p: (input: ObjectSequenceProtobuf) => ObjectSequenceProtobuf) =>
    typia.functional.isParameters(p),
  );
