import typia from "typia";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_AtomicAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicAlias",
  })(typia.json.application<[AtomicAlias], "ajv", true>());
