import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_notation_createValidatePascal_TemplateUnion = (): void =>
  _test_notation_validateGeneral("TemplateUnion")<TemplateUnion>(TemplateUnion)<
    typia.PascalCase<TemplateUnion>
  >({
    convert: typia.notations.createValidatePascal<TemplateUnion>(),
    assert: typia.createAssert<typia.PascalCase<TemplateUnion>>(),
  });
