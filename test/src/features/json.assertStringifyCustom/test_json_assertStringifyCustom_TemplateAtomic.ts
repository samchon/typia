import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_assertStringifyCustom_TemplateAtomic =
  _test_json_assertStringify(CustomGuardError)(
    "TemplateAtomic",
  )<TemplateAtomic>(TemplateAtomic)((input) =>
    typia.json.assertStringify<TemplateAtomic>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
