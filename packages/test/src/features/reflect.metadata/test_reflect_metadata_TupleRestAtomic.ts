import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_reflect_metadata_TupleRestAtomic = _test_reflect_metadata(
  "TupleRestAtomic",
)(typia.reflect.metadata<[TupleRestAtomic]>());
