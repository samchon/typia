import typia from "typia";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectSimpleProtobufOptional = (): void =>
  _test_reflect_metadata("ObjectSimpleProtobufOptional")(
    typia.reflect.metadata<[ObjectSimpleProtobufOptional]>()
  );