import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createAssertStringify_TemplateConstant = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)(
    typia.json.createAssertStringify<TemplateConstant>(),
  );
