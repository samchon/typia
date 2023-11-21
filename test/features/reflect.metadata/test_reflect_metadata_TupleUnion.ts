import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_reflect_metadata_TupleUnion = _test_reflect_metadata(
  "TupleUnion",
)(typia.reflect.metadata<[TupleUnion]>());
