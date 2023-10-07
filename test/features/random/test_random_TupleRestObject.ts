import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_random_TupleRestObject = _test_random(
    "TupleRestObject",
)<TupleRestObject>(TupleRestObject)({
    random: () =>
        typia.random<TupleRestObject>((TupleRestObject as any).RANDOM),
    assert: typia.createAssert<TupleRestObject>(),
});
