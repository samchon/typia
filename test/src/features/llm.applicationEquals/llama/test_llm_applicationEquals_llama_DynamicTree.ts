import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_applicationEquals_llama_DynamicTree = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "DynamicTree",
    factory: DynamicTree,
  })(typia.llm.application<DynamicTreeApplication, "llama", { equals:; true }>());

interface DynamicTreeApplication {
  insert(p: { first: DynamicTree }): Promise<void>;
  reduce(p: {
    first: DynamicTree;
    second: DynamicTree | null;
  }): Promise<DynamicTree>;
  coalesce(p: {
    first: DynamicTree | null;
    second: DynamicTree | null;
    third?: DynamicTree | null;
  }): Promise<DynamicTree | null>;
}
