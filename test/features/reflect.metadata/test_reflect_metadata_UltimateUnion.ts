import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_reflect_metadata_UltimateUnion = _test_reflect_metadata(
  "UltimateUnion",
)(typia.reflect.metadata<[UltimateUnion]>());
