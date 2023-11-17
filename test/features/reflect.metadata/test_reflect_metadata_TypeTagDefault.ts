import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_reflect_metadata_TypeTagDefault = _test_reflect_metadata(
  "TypeTagDefault",
)(typia.reflect.metadata<[TypeTagDefault]>());
