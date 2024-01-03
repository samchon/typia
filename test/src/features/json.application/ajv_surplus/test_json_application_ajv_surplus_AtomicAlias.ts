import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_application_ajv_surplus_AtomicAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "AtomicAlias",
  })(typia.json.application<[AtomicAlias], "ajv", true>());
