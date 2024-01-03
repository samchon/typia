import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_ajv_standard_AtomicClass =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicClass",
  })(typia.json.application<[AtomicClass], "ajv", false>());
