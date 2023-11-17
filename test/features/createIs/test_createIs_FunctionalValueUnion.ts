import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createIs_FunctionalValueUnion = _test_is(
  "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)(
  typia.createIs<FunctionalValueUnion>(),
);
