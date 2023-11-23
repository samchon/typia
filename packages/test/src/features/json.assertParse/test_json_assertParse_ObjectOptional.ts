import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_assertParse_ObjectOptional = _test_json_assertParse(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  typia.json.assertParse<ObjectOptional>(input),
);
