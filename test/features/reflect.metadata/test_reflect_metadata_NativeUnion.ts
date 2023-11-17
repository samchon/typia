import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_reflect_metadata_NativeUnion = _test_reflect_metadata(
  "NativeUnion",
)(typia.reflect.metadata<[NativeUnion]>());
