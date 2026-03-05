import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_json_isParse } from "../internal/_test_json_isParse";

export const test_json_isParse_ObjectSimple = (): void =>
  _test_json_isParse("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.json.isParse<ObjectSimple>(input),
  );
