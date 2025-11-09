import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_notation_createValidatePascal_TemplateAtomic = (): void =>
    _test_notation_validateGeneral("TemplateAtomic")<TemplateAtomic>(
        TemplateAtomic
  )<typia.PascalCase<TemplateAtomic>>({
    convert: typia.notations.createValidatePascal<TemplateAtomic>(),
    assert: typia.createAssert<typia.PascalCase<TemplateAtomic>>(),
  });
