import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_stringify_DynamicNever = (): void =>
  _test_json_stringify("DynamicNever")<DynamicNever>(DynamicNever)((input) =>
    typia.json.stringify<DynamicNever>(input),
  );
