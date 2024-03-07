import typia from "typia";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TypeTagAtomicUnion =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagAtomicUnion",
  })(typia.json.application<[TypeTagAtomicUnion], "swagger", true>());
