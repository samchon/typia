import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_isParse_ObjectAlias = _test_json_isParse(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) => typia.json.isParse<ObjectAlias>(input));
