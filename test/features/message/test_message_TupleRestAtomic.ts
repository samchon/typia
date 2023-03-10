import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_message_TupleRestAtomic = _test_message(
    "TupleRestAtomic",
    typia.message<TupleRestAtomic>(),
);
