import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createIs_FunctionalPropertyUnion = _test_is(
  "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
  typia.createIs<FunctionalPropertyUnion>(),
);
