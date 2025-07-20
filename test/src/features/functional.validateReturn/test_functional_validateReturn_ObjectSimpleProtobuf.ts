import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_validateReturn_ObjectSimpleProtobuf = (): void =>
  _test_functional_validateReturn("ObjectSimpleProtobuf")(ObjectSimpleProtobuf)(
    (p: (input: ObjectSimpleProtobuf) => ObjectSimpleProtobuf) =>
      typia.functional.validateReturn(p),
  );
