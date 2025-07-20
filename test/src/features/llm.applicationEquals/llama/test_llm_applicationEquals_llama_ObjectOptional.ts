import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_applicationEquals_llama_ObjectOptional = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ObjectOptional",
    factory: ObjectOptional,
  })(
    typia.llm.application<
      ObjectOptionalApplication,
      "llama",
      { equal: true }
    >(),
  );

interface ObjectOptionalApplication {
  insert(p: { first: ObjectOptional }): Promise<void>;
  reduce(p: {
    first: ObjectOptional;
    second: ObjectOptional | null;
  }): Promise<ObjectOptional>;
  coalesce(p: {
    first: ObjectOptional | null;
    second: ObjectOptional | null;
    third?: ObjectOptional | null;
  }): Promise<ObjectOptional | null>;
}
