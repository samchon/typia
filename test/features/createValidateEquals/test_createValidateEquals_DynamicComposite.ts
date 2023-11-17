import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createValidateEquals_DynamicComposite = _test_validateEquals(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(
  typia.createValidateEquals<DynamicComposite>(),
);
