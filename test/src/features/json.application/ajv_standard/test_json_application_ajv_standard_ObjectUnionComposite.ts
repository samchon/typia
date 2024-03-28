import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_json_application_ajv_standard_ObjectUnionComposite =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionComposite",
  })(typia.json.application<[ObjectUnionComposite], "ajv", false>());
