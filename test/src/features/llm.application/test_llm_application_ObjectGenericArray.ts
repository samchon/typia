import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_llm_application_ObjectGenericArray = (): void =>
  _test_llm_application({
    name: "ObjectGenericArray",
    factory: ObjectGenericArray,
  })(typia.llm.application<ObjectGenericArrayApplication>());

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
