import typia from "typia";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_NativeSimple = _test_reflect_metadata(
  "NativeSimple",
)(typia.reflect.metadata<[NativeSimple]>());
