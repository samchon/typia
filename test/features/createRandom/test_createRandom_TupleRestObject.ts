import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_random_TupleRestObject = _test_random<TupleRestObject>(
    TupleRestObject,
)({
    random: typia.createRandom<TupleRestObject>(),
    assert: typia.createAssert<TupleRestObject>(),
});
