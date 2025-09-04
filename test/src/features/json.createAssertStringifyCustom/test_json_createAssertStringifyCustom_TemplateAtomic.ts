import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createAssertStringifyCustom_TemplateAtomic = (): void =>
  _test_json_assertStringify(CustomGuardError)(
    "TemplateAtomic",
  )<TemplateAtomic>(TemplateAtomic)(
    typia.json.createAssertStringify<TemplateAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
