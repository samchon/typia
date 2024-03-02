import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertGuardEqualsCustom_TemplateUnion =
  _test_assertGuardEquals(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(
    typia.createAssertGuardEquals<TemplateUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
