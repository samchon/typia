import typia from "typia";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_0_ObjectUnionImplicit = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ObjectUnionImplicit",
    factory: ObjectUnionImplicit
  })(
    typia.llm.application<ObjectUnionImplicitApplication, "3.0", { equals: true }>(),
  );

interface ObjectUnionImplicitApplication {
  insert(p: { first: ObjectUnionImplicit }): Promise<void>;
  reduce(p: { first: ObjectUnionImplicit, second: ObjectUnionImplicit | null }): Promise<ObjectUnionImplicit>;
  coalesce(p: {
    first: ObjectUnionImplicit | null,
    second: ObjectUnionImplicit | null,
    third?: ObjectUnionImplicit | null,
  }): Promise<ObjectUnionImplicit | null>;
}