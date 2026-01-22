import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_schemas_v3_1_ToJsonAtomicSimple = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ToJsonAtomicSimple",
  })(typia.json.schemas<[ToJsonAtomicSimple], "3.1">());
