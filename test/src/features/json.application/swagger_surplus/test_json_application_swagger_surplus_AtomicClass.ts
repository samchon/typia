import typia from "typia";
import { AtomicClass } from "../../../structures/AtomicClass";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_AtomicClass =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "AtomicClass",
  })(typia.json.application<[AtomicClass], "swagger", true>());
