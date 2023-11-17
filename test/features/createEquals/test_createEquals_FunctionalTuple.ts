import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createEquals_FunctionalTuple = _test_equals(
  "FunctionalTuple",
)<FunctionalTuple>(FunctionalTuple)(typia.createEquals<FunctionalTuple>());
