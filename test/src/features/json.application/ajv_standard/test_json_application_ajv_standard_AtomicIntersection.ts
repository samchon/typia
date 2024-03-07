import typia from "typia";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_AtomicIntersection =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicIntersection",
  })(typia.json.application<[AtomicIntersection], "ajv", false>());
