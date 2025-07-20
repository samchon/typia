import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_reflect_metadata_ObjectSimpleProtobuf = (): void =>
  _test_reflect_metadata("ObjectSimpleProtobuf")(
    typia.reflect.metadata<[ObjectSimpleProtobuf]>(),
  );
