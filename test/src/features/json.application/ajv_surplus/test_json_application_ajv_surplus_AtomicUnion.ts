import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_AtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicUnion",
  })(typia.json.application<[AtomicUnion], "ajv", true>());
