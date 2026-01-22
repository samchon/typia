import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createIsParse_ObjectDynamic = (): void =>
  _test_json_isParse("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
    typia.json.createIsParse<ObjectDynamic>(),
  );
