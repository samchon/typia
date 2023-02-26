import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_random } from "../internal/_test_random";

export const test_random_TupleRestArray = _test_random(
    "TupleRestArray",
    () => typia.random<TupleRestArray>(),
    typia.createAssert<TupleRestArray>(),
);
