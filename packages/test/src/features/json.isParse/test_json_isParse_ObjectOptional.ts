import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_isParse_ObjectOptional = _test_json_isParse(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  typia.json.isParse<ObjectOptional>(input),
);
