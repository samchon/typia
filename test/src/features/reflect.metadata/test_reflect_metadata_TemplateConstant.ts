import typia from "typia";
import { TemplateConstant } from "../../structures/TemplateConstant";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TemplateConstant = (): void =>
  _test_reflect_metadata("TemplateConstant")(
    typia.reflect.metadata<[TemplateConstant]>()
  );