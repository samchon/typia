import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createEquals_FunctionalValueUnion = _test_equals(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(FunctionalValueUnion)(
    typia.createEquals<FunctionalValueUnion>(),
);
