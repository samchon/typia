import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_isFunction_ObjectSimpleProtobuf =
  _test_functional_isFunction("ObjectSimpleProtobuf")(ObjectSimpleProtobuf)(
    (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
      typia.functional.isFunction(p),
  );
