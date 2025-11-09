import typia from "typia";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArraySimpleProtobufOptional = (): void =>
  _test_reflect_metadata("ArraySimpleProtobufOptional")(
    typia.reflect.metadata<[ArraySimpleProtobufOptional]>()
  );