import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_notation_createValidateKebab_TemplateUnion = (): void =>
  _test_notation_validateGeneral("TemplateUnion")<TemplateUnion>(TemplateUnion)<
    typia.KebabCase<TemplateUnion>
  >({
    convert: typia.notations.createValidateKebab<TemplateUnion>(),
    assert: typia.createAssert<typia.KebabCase<TemplateUnion>>(),
  });
