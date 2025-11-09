import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ObjectInternal = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ObjectInternal",
    factory: ObjectInternal
  })(
    typia.llm.application<ObjectInternalApplication, "3.1">(),
  );

interface ObjectInternalApplication {
  insert(p: { first: ObjectInternal }): Promise<void>;
  reduce(p: { first: ObjectInternal, second: ObjectInternal | null }): Promise<ObjectInternal>;
  coalesce(p: {
    first: ObjectInternal | null,
    second: ObjectInternal | null,
    third?: ObjectInternal | null,
  }): Promise<ObjectInternal | null>;
}