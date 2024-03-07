import typia from "typia";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_AtomicAlias =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "AtomicAlias",
  })(typia.json.application<[AtomicAlias], "swagger", true>());
