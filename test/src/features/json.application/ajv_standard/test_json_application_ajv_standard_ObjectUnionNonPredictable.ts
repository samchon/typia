import typia from "typia";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ObjectUnionNonPredictable =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectUnionNonPredictable",
  })(typia.json.application<[ObjectUnionNonPredictable], "ajv", false>());
