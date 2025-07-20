import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssert_TemplateUnion = (): void =>
  _test_assert(TypeGuardError)("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.createAssert<TemplateUnion>(),
  );
