import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_isParse_ObjectUndefined = (): void =>
  _test_json_isParse("ObjectUndefined")<ObjectUndefined>(ObjectUndefined)(
    (input) => typia.json.isParse<ObjectUndefined>(input),
  );
