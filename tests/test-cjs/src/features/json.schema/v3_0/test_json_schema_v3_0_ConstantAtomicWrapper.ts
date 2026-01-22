import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_schema_v3_0_ConstantAtomicWrapper = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ConstantAtomicWrapper",
  })(typia.json.schema<ConstantAtomicWrapper, "3.0">());
