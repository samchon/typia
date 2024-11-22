import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_application_v3_1_ToJsonUnion = _test_json_application({
  version: "3.1",
  name: "ToJsonUnion",
})(typia.json.application<ToJsonUnionApplication, "3.1">());

interface ToJsonUnionApplication {
  insert(first: ToJsonUnion): Promise<void>;
  reduce(first: ToJsonUnion, second: ToJsonUnion | null): Promise<ToJsonUnion>;
  coalesce(
    first: ToJsonUnion | null,
    second: ToJsonUnion | null,
    third?: ToJsonUnion | null,
  ): Promise<ToJsonUnion | null>;
}
