import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createIs_ObjectSimpleProtobuf = _test_is(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
  typia.createIs<ObjectSimpleProtobuf>(),
);
