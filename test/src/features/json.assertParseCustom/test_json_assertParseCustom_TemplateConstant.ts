import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_assertParseCustom_TemplateConstant = (): void =>
  _test_json_assertParse(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)((input) =>
    typia.json.assertParse<TemplateConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
