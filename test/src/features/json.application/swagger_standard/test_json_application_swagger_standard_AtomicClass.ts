import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_application_swagger_standard_AtomicClass =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "AtomicClass",
  })(typia.json.application<[AtomicClass], "swagger", false>());
