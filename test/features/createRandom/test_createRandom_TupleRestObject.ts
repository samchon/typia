import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createRandom_TupleRestObject = _test_random(
    "TupleRestObject",
    typia.createRandom<TupleRestObject>(),
    typia.createAssert<TupleRestObject>(),
);
