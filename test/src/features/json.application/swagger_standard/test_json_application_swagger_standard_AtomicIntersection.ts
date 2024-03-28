import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_application_swagger_standard_AtomicIntersection =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "AtomicIntersection",
  })(typia.json.application<[AtomicIntersection], "swagger", false>());
