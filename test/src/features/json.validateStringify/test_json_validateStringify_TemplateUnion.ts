import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_validateStringify_TemplateUnion = (): void =>
  _test_json_validateStringify("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    (input) => typia.json.validateStringify<TemplateUnion>(input),
  );
