import typia from "typia";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ArrayAtomicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ArrayAtomicSimple",
  })(typia.json.application<[ArrayAtomicSimple], "swagger", true>());
