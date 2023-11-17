import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_reflect_metadata_DynamicTree = _test_reflect_metadata(
  "DynamicTree",
)(typia.reflect.metadata<[DynamicTree]>());
