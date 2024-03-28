import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_application_swagger_standard_AtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "AtomicUnion",
  })(typia.json.application<[AtomicUnion], "swagger", false>());
