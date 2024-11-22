import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_llm_application_gemini_ObjectGenericArray =
  _test_llm_application({
    model: "gemini",
    name: "ObjectGenericArray",
  })(typia.llm.application<ObjectGenericArrayApplication, "gemini">());

interface ObjectGenericArrayApplication {
  insert(first: ObjectGenericArray): Promise<void>;
  reduce(
    first: ObjectGenericArray,
    second: ObjectGenericArray | null,
  ): Promise<ObjectGenericArray>;
  coalesce(
    first: ObjectGenericArray | null,
    second: ObjectGenericArray | null,
    third?: ObjectGenericArray | null,
  ): Promise<ObjectGenericArray | null>;
}
