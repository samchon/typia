import typia from "typia";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectOptional = (): void =>
  _test_reflect_metadata("ObjectOptional")(
    typia.reflect.metadata<[ObjectOptional]>()
  );