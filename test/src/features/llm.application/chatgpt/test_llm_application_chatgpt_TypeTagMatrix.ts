import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_application_chatgpt_TypeTagMatrix = _test_llm_application(
  {
    model: "chatgpt",
    name: "TypeTagMatrix",
  },
)(typia.llm.application<TypeTagMatrixApplication, "chatgpt">());

interface TypeTagMatrixApplication {
  insert(first: TypeTagMatrix): Promise<void>;
  reduce(
    first: TypeTagMatrix,
    second: TypeTagMatrix | null,
  ): Promise<TypeTagMatrix>;
  coalesce(
    first: TypeTagMatrix | null,
    second: TypeTagMatrix | null,
    third?: TypeTagMatrix | null,
  ): Promise<TypeTagMatrix | null>;
}
