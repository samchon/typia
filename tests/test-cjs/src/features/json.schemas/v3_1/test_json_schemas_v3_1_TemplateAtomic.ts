import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_json_schemas_v3_1_TemplateAtomic = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TemplateAtomic",
  })(typia.json.schemas<[TemplateAtomic], "3.1">());
