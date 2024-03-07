import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_AtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "AtomicUnion",
  })(typia.json.application<[AtomicUnion], "swagger", true>());
