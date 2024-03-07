import typia from "typia";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_AtomicClass =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicClass",
  })(typia.json.application<[AtomicClass], "ajv", false>());
