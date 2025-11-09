import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_applicationEquals_chatgpt_ObjectNullable = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "ObjectNullable",
    factory: ObjectNullable,
  })(
    typia.llm.application<
      ObjectNullableApplication,
      "chatgpt",
      { equals: true }
    >(),
  );

interface ObjectNullableApplication {
  insert(p: { first: ObjectNullable }): Promise<void>;
  reduce(p: {
    first: ObjectNullable;
    second: ObjectNullable | null;
  }): Promise<ObjectNullable>;
  coalesce(p: {
    first: ObjectNullable | null;
    second: ObjectNullable | null;
    third?: ObjectNullable | null;
  }): Promise<ObjectNullable | null>;
}
