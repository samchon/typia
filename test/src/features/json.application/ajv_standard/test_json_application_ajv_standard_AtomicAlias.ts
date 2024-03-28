import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_application_ajv_standard_AtomicAlias =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicAlias",
  })(typia.json.application<[AtomicAlias], "ajv", false>());
