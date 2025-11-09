import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_reflect_metadata_TemplateConstant = (): void =>
  _test_reflect_metadata("TemplateConstant")(
    typia.reflect.metadata<[TemplateConstant]>(),
  );
