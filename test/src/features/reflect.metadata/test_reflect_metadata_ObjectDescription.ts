import typia from "typia";
import { ObjectDescription } from "../../structures/ObjectDescription";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectDescription = _test_reflect_metadata(
  "ObjectDescription",
)(typia.reflect.metadata<[ObjectDescription]>());
