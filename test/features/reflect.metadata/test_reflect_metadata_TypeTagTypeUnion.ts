import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_reflect_metadata_TypeTagTypeUnion = _test_reflect_metadata(
  "TypeTagTypeUnion",
)(typia.reflect.metadata<[TypeTagTypeUnion]>());
