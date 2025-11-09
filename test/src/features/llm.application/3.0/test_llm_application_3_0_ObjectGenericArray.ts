import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ObjectGenericArray = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ObjectGenericArray",
    factory: ObjectGenericArray
  })(
    typia.llm.application<ObjectGenericArrayApplication, "3.0">(),
  );

interface ObjectGenericArrayApplication {
  insert(p: { first: ObjectGenericArray }): Promise<void>;
  reduce(p: { first: ObjectGenericArray, second: ObjectGenericArray | null }): Promise<ObjectGenericArray>;
  coalesce(p: {
    first: ObjectGenericArray | null,
    second: ObjectGenericArray | null,
    third?: ObjectGenericArray | null,
  }): Promise<ObjectGenericArray | null>;
}