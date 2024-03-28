import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_application_ajv_surplus_ObjectUnionNonPredictable =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ObjectUnionNonPredictable",
  })(typia.json.application<[ObjectUnionNonPredictable], "ajv", true>());
