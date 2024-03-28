import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_ajv_surplus_AtomicClass =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicClass",
  })(typia.json.application<[AtomicClass], "ajv", true>());
