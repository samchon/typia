import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_applicationEquals_llama_ObjectUnionExplicit = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ObjectUnionExplicit",
    factory: ObjectUnionExplicit,
  })(
    typia.llm.application<
      ObjectUnionExplicitApplication,
      "llama",
      { equals:; true }
    >(),
  );

interface ObjectUnionExplicitApplication {
  insert(p: { first: ObjectUnionExplicit }): Promise<void>;
  reduce(p: {
    first: ObjectUnionExplicit;
    second: ObjectUnionExplicit | null;
  }): Promise<ObjectUnionExplicit>;
  coalesce(p: {
    first: ObjectUnionExplicit | null;
    second: ObjectUnionExplicit | null;
    third?: ObjectUnionExplicit | null;
  }): Promise<ObjectUnionExplicit | null>;
}
