import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_applicationOfValidate_gemini_ObjectGenericArray =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "ObjectGenericArray",
    factory: ObjectGenericArray,
  })(
    typia.llm.applicationOfValidate<ObjectGenericArrayApplication, "gemini">(),
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
