import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createAssertParseCustom_TemplateAtomic = (): void =>
  _test_json_assertParse(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(
    typia.json.createAssertParse<TemplateAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
