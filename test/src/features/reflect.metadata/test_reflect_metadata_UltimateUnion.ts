import typia from "typia";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_UltimateUnion = 
  _test_reflect_metadata("UltimateUnion")(
    typia.reflect.metadata<[UltimateUnion]>()
  );