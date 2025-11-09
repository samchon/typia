import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_chatgpt_ObjectDate = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectDate",
    factory: ObjectDate
  })(
    typia.llm.application<ObjectDateApplication, "chatgpt", { equals: true }>(),
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