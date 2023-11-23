import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createIsParse_ObjectGenericUnion = _test_json_isParse(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
  typia.json.createIsParse<ObjectGenericUnion>(),
);
