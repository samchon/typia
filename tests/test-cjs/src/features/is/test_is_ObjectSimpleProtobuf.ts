import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_is_ObjectSimpleProtobuf = (): void =>
  _test_is("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
    (input) => typia.is<ObjectSimpleProtobuf>(input),
  );
