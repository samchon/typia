import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_reflect_metadata_DynamicUnion = _test_reflect_metadata(
  "DynamicUnion",
)(typia.reflect.metadata<[DynamicUnion]>());
