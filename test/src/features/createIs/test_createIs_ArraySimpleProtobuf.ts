import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_createIs_ArraySimpleProtobuf = (): void =>
  _test_is("ArraySimpleProtobuf")<ArraySimpleProtobuf>(ArraySimpleProtobuf)(
    typia.createIs<ArraySimpleProtobuf>(),
  );
