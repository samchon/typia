import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TemplateAtomic =
  _test_json_assertStringify(CustomGuardError)(
    "TemplateAtomic",
  )<TemplateAtomic>(TemplateAtomic)(
    typia.json.createAssertStringify<TemplateAtomic>(
      (p) => new CustomGuardError(p),
    ),
  );
