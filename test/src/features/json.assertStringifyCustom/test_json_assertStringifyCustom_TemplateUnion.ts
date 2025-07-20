import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_assertStringifyCustom_TemplateUnion = (): void =>
  _test_json_assertStringify(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )((input) =>
    typia.json.assertStringify<TemplateUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
