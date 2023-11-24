import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_reflect_metadata_ObjectHttpAtomic = _test_reflect_metadata(
  "ObjectHttpAtomic",
)(typia.reflect.metadata<[ObjectHttpAtomic]>());
