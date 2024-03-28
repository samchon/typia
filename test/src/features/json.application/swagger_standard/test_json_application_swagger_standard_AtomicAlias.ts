import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_application_swagger_standard_AtomicAlias =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "AtomicAlias",
  })(typia.json.application<[AtomicAlias], "swagger", false>());
