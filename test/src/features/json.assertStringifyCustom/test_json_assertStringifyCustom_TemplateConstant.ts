import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_assertStringifyCustom_TemplateConstant =
  _test_json_assertStringify(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)((input) =>
    typia.json.assertStringify<TemplateConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
