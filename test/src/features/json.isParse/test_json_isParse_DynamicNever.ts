import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_isParse_DynamicNever = (): void =>
  _test_json_isParse("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
    typia.json.isParse<DynamicNever>(input),
  );
