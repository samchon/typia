import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_is_FunctionalObjectUnion = _test_is(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(FunctionalObjectUnion)(
    typia.createIs<FunctionalObjectUnion>(),
);
