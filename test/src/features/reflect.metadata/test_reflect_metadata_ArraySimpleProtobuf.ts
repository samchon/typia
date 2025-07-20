import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_reflect_metadata_ArraySimpleProtobuf = (): void =>
  _test_reflect_metadata("ArraySimpleProtobuf")(
    typia.reflect.metadata<[ArraySimpleProtobuf]>(),
  );
