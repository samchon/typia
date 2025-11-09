import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_isParameters_ObjectSimpleProtobuf = (): void =>
  _test_functional_isParameters("ObjectSimpleProtobuf")(ObjectSimpleProtobuf)(
    (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
      typia.functional.isParameters(p),
  );
