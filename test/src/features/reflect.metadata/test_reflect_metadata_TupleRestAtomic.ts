import typia from "typia";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TupleRestAtomic = _test_reflect_metadata(
  "TupleRestAtomic",
)(typia.reflect.metadata<[TupleRestAtomic]>());
