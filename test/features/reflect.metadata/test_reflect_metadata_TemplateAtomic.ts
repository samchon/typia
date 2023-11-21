import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_reflect_metadata_TemplateAtomic = _test_reflect_metadata(
  "TemplateAtomic",
)(typia.reflect.metadata<[TemplateAtomic]>());
