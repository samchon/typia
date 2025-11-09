import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_TypeTagArrayUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "TypeTagArrayUnion",
  })(
    typia.llm.parameters<TypeTagArrayUnionParameters, "gemini">(),
  );

interface TypeTagArrayUnionParameters {
  regular: TypeTagArrayUnion;
  nullable: TypeTagArrayUnion | null;
  optional: TypeTagArrayUnion | undefined;
  faint: TypeTagArrayUnion | null | undefined;
  array: Array<TypeTagArrayUnion>;
}