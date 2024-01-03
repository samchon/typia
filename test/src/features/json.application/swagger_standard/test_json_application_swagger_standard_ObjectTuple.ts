import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_application_swagger_standard_ObjectTuple =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectTuple",
  })(typia.json.application<[ObjectTuple], "swagger", false>());
