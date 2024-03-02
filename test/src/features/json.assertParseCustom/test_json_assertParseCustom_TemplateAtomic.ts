import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_assertParseCustom_TemplateAtomic =
  _test_json_assertParse(CustomGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) =>
    typia.json.assertParse<TemplateAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
