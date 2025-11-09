import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_reflect_metadata_ArraySimpleProtobufNullable = (): void =>
  _test_reflect_metadata("ArraySimpleProtobufNullable")(
    typia.reflect.metadata<[ArraySimpleProtobufNullable]>(),
  );
