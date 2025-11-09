import typia from "typia";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TemplateUnion = (): void =>
  _test_reflect_metadata("TemplateUnion")(
    typia.reflect.metadata<[TemplateUnion]>()
  );