import typia from "typia";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_TypeTagArrayUnion = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "TypeTagArrayUnion",
  })(
    typia.llm.parameters<TypeTagArrayUnionParameters, "3.1">(),
  );

interface TypeTagArrayUnionParameters {
  regular: TypeTagArrayUnion;
  nullable: TypeTagArrayUnion | null;
  optional: TypeTagArrayUnion | undefined;
  faint: TypeTagArrayUnion | null | undefined;
  array: Array<TypeTagArrayUnion>;
}