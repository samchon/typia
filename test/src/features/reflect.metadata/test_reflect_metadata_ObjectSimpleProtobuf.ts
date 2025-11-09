import typia from "typia";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectSimpleProtobuf = (): void =>
  _test_reflect_metadata("ObjectSimpleProtobuf")(
    typia.reflect.metadata<[ObjectSimpleProtobuf]>()
  );