import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_reflect_metadata_ObjectSimpleProtobufOptional = (): void =>
  _test_reflect_metadata("ObjectSimpleProtobufOptional")(
    typia.reflect.metadata<[ObjectSimpleProtobufOptional]>(),
  );
