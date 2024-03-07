import typia from "typia";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_NativeAlias = _test_reflect_metadata(
  "NativeAlias",
)(typia.reflect.metadata<[NativeAlias]>());
