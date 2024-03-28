import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_json_application_swagger_standard_ToJsonAtomicSimple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ToJsonAtomicSimple",
  })(typia.json.application<[ToJsonAtomicSimple], "swagger", false>());
