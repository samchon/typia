import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ObjectPartial = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ObjectPartial",
    factory: ObjectPartial
  })(
    typia.llm.application<ObjectPartialApplication, "3.0">(),
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