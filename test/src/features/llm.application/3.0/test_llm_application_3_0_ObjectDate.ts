import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ObjectDate = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ObjectDate",
    factory: ObjectDate
  })(
    typia.llm.application<ObjectDateApplication, "3.0">(),
  );

interface ObjectDateApplication {
  insert(p: { first: ObjectDate }): Promise<void>;
  reduce(p: { first: ObjectDate, second: ObjectDate | null }): Promise<ObjectDate>;
  coalesce(p: {
    first: ObjectDate | null,
    second: ObjectDate | null,
    third?: ObjectDate | null,
  }): Promise<ObjectDate | null>;
}