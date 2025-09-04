import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_isParse_ObjectNullable = (): void =>
  _test_json_isParse("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    (input) => typia.json.isParse<ObjectNullable>(input),
  );
