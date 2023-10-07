import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_random_TupleRestArray = _test_random(
    "TupleRestArray",
)<TupleRestArray>(TupleRestArray)({
    random: () => typia.random<TupleRestArray>((TupleRestArray as any).RANDOM),
    assert: typia.createAssert<TupleRestArray>(),
});
