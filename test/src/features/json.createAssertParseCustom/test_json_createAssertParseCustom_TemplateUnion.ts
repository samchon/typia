import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TemplateUnion =
  _test_json_assertParse(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(
    typia.json.createAssertParse<TemplateUnion>((p) => new CustomGuardError(p)),
  );
