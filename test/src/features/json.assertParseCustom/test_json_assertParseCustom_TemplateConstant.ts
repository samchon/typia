import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TemplateConstant =
  _test_json_assertParse(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)((input) =>
    typia.json.assertParse<TemplateConstant>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
