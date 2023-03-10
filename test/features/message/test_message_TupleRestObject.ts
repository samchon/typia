import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_message_TupleRestObject = _test_message(
    "TupleRestObject",
    typia.message<TupleRestObject>(),
);
