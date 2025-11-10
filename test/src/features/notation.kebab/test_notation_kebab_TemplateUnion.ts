import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_notation_validateKebab_TemplateUnion = (): void =>
  _test_notation_validateGeneral("TemplateUnion")<TemplateUnion>(TemplateUnion)<
    typia.KebabCase<TemplateUnion>
  >({
    convert: (input) => typia.notations.validateKebab<TemplateUnion>(input),
    assert: typia.createAssert<typia.KebabCase<TemplateUnion>>(),
  });
