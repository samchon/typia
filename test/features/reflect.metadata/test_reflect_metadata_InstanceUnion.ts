import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_reflect_metadata_InstanceUnion = _test_reflect_metadata(
  "InstanceUnion",
)(typia.reflect.metadata<[InstanceUnion]>());
