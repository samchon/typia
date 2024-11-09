import typia from "typia";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_NativeUnion = 
  _test_reflect_metadata("NativeUnion")(
    typia.reflect.metadata<[NativeUnion]>()
  );