import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_application_swagger_surplus_AtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "AtomicUnion",
  })(typia.json.application<[AtomicUnion], "swagger", true>());
