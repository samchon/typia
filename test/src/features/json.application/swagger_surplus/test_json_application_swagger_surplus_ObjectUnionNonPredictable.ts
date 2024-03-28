import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_application_swagger_surplus_ObjectUnionNonPredictable =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectUnionNonPredictable",
  })(typia.json.application<[ObjectUnionNonPredictable], "swagger", true>());
