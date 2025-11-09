import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_ObjectGenericArray = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ObjectGenericArray",
  })(
    typia.llm.parameters<ObjectGenericArrayParameters, "3.0">(),
  );

interface ObjectGenericArrayParameters {
  regular: ObjectGenericArray;
  nullable: ObjectGenericArray | null;
  optional: ObjectGenericArray | undefined;
  faint: ObjectGenericArray | null | undefined;
  array: Array<ObjectGenericArray>;
}