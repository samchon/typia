import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createValidate_FunctionalProperty = _test_validate(
  "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)(
  typia.createValidate<FunctionalProperty>(),
);
