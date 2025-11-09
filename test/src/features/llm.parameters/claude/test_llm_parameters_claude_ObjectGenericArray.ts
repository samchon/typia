import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_ObjectGenericArray = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "ObjectGenericArray",
  })(
    typia.llm.parameters<ObjectGenericArrayParameters, "claude">(),
  );

interface ObjectGenericArrayParameters {
  regular: ObjectGenericArray;
  nullable: ObjectGenericArray | null;
  optional: ObjectGenericArray | undefined;
  faint: ObjectGenericArray | null | undefined;
  array: Array<ObjectGenericArray>;
}