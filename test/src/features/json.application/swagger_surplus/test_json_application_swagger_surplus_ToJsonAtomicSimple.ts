import typia from "typia";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_ToJsonAtomicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ToJsonAtomicSimple",
  })(typia.json.application<[ToJsonAtomicSimple], "swagger", true>());
