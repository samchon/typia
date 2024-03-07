import typia from "typia";
import { TupleOptional } from "../../structures/TupleOptional";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TupleOptional = _test_reflect_metadata(
  "TupleOptional",
)(typia.reflect.metadata<[TupleOptional]>());
