import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_reflect_metadata_ToJsonAtomicSimple = _test_reflect_metadata(
  "ToJsonAtomicSimple",
)(typia.reflect.metadata<[ToJsonAtomicSimple]>());
