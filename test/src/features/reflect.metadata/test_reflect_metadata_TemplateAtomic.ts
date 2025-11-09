import typia from "typia";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TemplateAtomic = (): void =>
  _test_reflect_metadata("TemplateAtomic")(
    typia.reflect.metadata<[TemplateAtomic]>()
  );