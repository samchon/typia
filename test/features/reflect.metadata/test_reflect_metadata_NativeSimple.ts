import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_reflect_metadata_NativeSimple = _test_reflect_metadata(
  "NativeSimple",
)(typia.reflect.metadata<[NativeSimple]>());
