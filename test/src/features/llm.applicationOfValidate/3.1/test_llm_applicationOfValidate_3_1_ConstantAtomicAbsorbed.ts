import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_llm_applicationOfValidate_3_1_ConstantAtomicAbsorbed =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "ConstantAtomicAbsorbed",
    factory: ConstantAtomicAbsorbed,
  })(
    typia.llm.applicationOfValidate<ConstantAtomicAbsorbedApplication, "3.1">(),
  );

interface ConstantAtomicAbsorbedApplication {
  insert(p: { first: ConstantAtomicAbsorbed }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicAbsorbed;
    second: ConstantAtomicAbsorbed | null;
  }): Promise<ConstantAtomicAbsorbed>;
  coalesce(p: {
    first: ConstantAtomicAbsorbed | null;
    second: ConstantAtomicAbsorbed | null;
    third?: ConstantAtomicAbsorbed | null;
  }): Promise<ConstantAtomicAbsorbed | null>;
}
