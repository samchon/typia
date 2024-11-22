import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_application_v3_0_ArrayMatrix = _test_json_application({
  version: "3.0",
  name: "ArrayMatrix",
})(typia.json.application<ArrayMatrixApplication, "3.0">());

interface ArrayMatrixApplication {
  insert(first: ArrayMatrix): Promise<void>;
  reduce(first: ArrayMatrix, second: ArrayMatrix | null): Promise<ArrayMatrix>;
  coalesce(
    first: ArrayMatrix | null,
    second: ArrayMatrix | null,
    third?: ArrayMatrix | null,
  ): Promise<ArrayMatrix | null>;
}
