import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_TypeTagArrayUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "TypeTagArrayUnion",
  })(
    typia.llm.parameters<TypeTagArrayUnionParameters, "3.0">(),
  );

interface TypeTagArrayUnionParameters {
  regular: TypeTagArrayUnion;
  nullable: TypeTagArrayUnion | null;
  optional: TypeTagArrayUnion | undefined;
  faint: TypeTagArrayUnion | null | undefined;
  array: Array<TypeTagArrayUnion>;
}