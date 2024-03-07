import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TemplateUnion =
  _test_json_assertStringify(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )((input) =>
    typia.json.assertStringify<TemplateUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
