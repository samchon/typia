import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_applicationEquals_llama_ObjectPartial = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ObjectPartial",
    factory: ObjectPartial,
  })(
    typia.llm.application<ObjectPartialApplication, "llama", { equals:; true }>(),
  );

interface ObjectPartialApplication {
  insert(p: { first: ObjectPartial }): Promise<void>;
  reduce(p: {
    first: ObjectPartial;
    second: ObjectPartial | null;
  }): Promise<ObjectPartial>;
  coalesce(p: {
    first: ObjectPartial | null;
    second: ObjectPartial | null;
    third?: ObjectPartial | null;
  }): Promise<ObjectPartial | null>;
}
