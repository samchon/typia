import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_reflect_metadata_ObjectSimple = _test_reflect_metadata(
  "ObjectSimple",
)(typia.reflect.metadata<[ObjectSimple]>());
