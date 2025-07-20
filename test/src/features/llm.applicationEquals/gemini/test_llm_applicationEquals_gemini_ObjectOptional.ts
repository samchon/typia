import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_llm_applicationEquals_gemini_ObjectOptional = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectOptional",
    factory: ObjectOptional,
  })(
    typia.llm.application<
      ObjectOptionalApplication,
      "gemini",
      { equals: true }
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
