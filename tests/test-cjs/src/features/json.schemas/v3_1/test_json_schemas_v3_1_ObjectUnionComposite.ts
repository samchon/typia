import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_json_schemas_v3_1_ObjectUnionComposite = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionComposite",
  })(typia.json.schemas<[ObjectUnionComposite], "3.1">());
