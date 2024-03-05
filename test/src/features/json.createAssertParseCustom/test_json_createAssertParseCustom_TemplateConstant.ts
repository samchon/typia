import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createAssertParseCustom_TemplateConstant =
  _test_json_assertParse(CustomGuardError)(
    "TemplateConstant",
  )<TemplateConstant>(TemplateConstant)(
    typia.json.createAssertParse<TemplateConstant>(
      (p) => new CustomGuardError(p),
    ),
  );
