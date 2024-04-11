import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_application_v3_1_ArrayAtomicSimple =
  _test_json_application({
    version: "3.1",
    name: "ArrayAtomicSimple",
  })(typia.json.application<[ArrayAtomicSimple], "3.1">());
