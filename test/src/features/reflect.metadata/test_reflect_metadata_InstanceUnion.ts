import typia from "typia";
import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_InstanceUnion = (): void =>
  _test_reflect_metadata("InstanceUnion")(
    typia.reflect.metadata<[InstanceUnion]>()
  );