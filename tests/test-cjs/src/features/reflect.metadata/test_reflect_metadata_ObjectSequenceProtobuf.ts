import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

export const test_reflect_metadata_ObjectSequenceProtobuf = (): void =>
  _test_reflect_metadata("ObjectSequenceProtobuf")(
    typia.reflect.metadata<[ObjectSequenceProtobuf]>(),
  );
