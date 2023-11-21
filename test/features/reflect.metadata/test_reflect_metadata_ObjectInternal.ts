import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_reflect_metadata_ObjectInternal = _test_reflect_metadata(
  "ObjectInternal",
)(typia.reflect.metadata<[ObjectInternal]>());
