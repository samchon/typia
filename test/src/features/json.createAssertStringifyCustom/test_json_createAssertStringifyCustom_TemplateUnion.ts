import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_createAssertStringifyCustom_TemplateUnion =
  _test_json_assertStringify(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(
    typia.json.createAssertStringify<TemplateUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
