import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_reflect_metadata_DynamicComposite = _test_reflect_metadata(
  "DynamicComposite",
)(typia.reflect.metadata<[DynamicComposite]>());
