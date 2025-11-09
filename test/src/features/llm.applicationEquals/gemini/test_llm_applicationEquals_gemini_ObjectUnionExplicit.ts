import typia from "typia";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ObjectUnionExplicit = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectUnionExplicit",
    factory: ObjectUnionExplicit
  })(
    typia.llm.application<ObjectUnionExplicitApplication, "gemini", { equals: true }>(),
  );

interface ObjectUnionExplicitApplication {
  insert(p: { first: ObjectUnionExplicit }): Promise<void>;
  reduce(p: { first: ObjectUnionExplicit, second: ObjectUnionExplicit | null }): Promise<ObjectUnionExplicit>;
  coalesce(p: {
    first: ObjectUnionExplicit | null,
    second: ObjectUnionExplicit | null,
    third?: ObjectUnionExplicit | null,
  }): Promise<ObjectUnionExplicit | null>;
}