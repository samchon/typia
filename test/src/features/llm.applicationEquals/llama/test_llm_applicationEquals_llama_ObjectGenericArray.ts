import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_applicationEquals_llama_ObjectGenericArray = (): void =>
  _test_llm_applicationEquals({
    model: "llama",
    name: "ObjectGenericArray",
    factory: ObjectGenericArray,
  })(
    typia.llm.application<
      ObjectGenericArrayApplication,
      "llama",
      { equals: true }
    >(),
  );

interface ObjectGenericArrayApplication {
  insert(p: { first: ObjectGenericArray }): Promise<void>;
  reduce(p: {
    first: ObjectGenericArray;
    second: ObjectGenericArray | null;
  }): Promise<ObjectGenericArray>;
  coalesce(p: {
    first: ObjectGenericArray | null;
    second: ObjectGenericArray | null;
    third?: ObjectGenericArray | null;
  }): Promise<ObjectGenericArray | null>;
}
