import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_reflect_metadata_TypeTagObjectUnion = _test_reflect_metadata(
  "TypeTagObjectUnion",
)(typia.reflect.metadata<[TypeTagObjectUnion]>());
