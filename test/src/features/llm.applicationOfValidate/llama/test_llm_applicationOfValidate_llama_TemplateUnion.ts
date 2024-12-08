import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_applicationOfValidate_llama_TemplateUnion =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "TemplateUnion",
    factory: TemplateUnion,
  })(typia.llm.applicationOfValidate<TemplateUnionApplication, "llama">());

interface TemplateUnionApplication {
  insert(p: { first: TemplateUnion }): Promise<void>;
  reduce(p: {
    first: TemplateUnion;
    second: TemplateUnion | null;
  }): Promise<TemplateUnion>;
  coalesce(p: {
    first: TemplateUnion | null;
    second: TemplateUnion | null;
    third?: TemplateUnion | null;
  }): Promise<TemplateUnion | null>;
}
