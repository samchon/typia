import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_json_application_v3_1_ObjectUnionComposite =
  _test_json_application({
    version: "3.1",
    name: "ObjectUnionComposite",
  })(typia.json.application<[ObjectUnionComposite], "3.1">());
