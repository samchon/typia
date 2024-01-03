import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_json_application_swagger_standard_ArrayAtomicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ArrayAtomicSimple",
  })(typia.json.application<[ArrayAtomicSimple], "swagger", false>());
