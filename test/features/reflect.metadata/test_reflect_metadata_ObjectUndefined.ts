import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_reflect_metadata_ObjectUndefined = _test_reflect_metadata(
  "ObjectUndefined",
)(typia.reflect.metadata<[ObjectUndefined]>());
