import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ObjectPartial = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectPartial",
    factory: ObjectPartial
  })(
    typia.llm.application<ObjectPartialApplication, "claude", { equals: true }>(),
  );

interface ObjectPartialApplication {
  insert(p: { first: ObjectPartial }): Promise<void>;
  reduce(p: { first: ObjectPartial, second: ObjectPartial | null }): Promise<ObjectPartial>;
  coalesce(p: {
    first: ObjectPartial | null,
    second: ObjectPartial | null,
    third?: ObjectPartial | null,
  }): Promise<ObjectPartial | null>;
}