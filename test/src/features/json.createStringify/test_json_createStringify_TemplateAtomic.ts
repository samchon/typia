import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createStringify_TemplateAtomic = (): void =>
  _test_json_stringify("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.json.createStringify<TemplateAtomic>(),
  );
