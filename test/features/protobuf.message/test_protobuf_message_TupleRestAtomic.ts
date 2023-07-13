import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_protobuf_message_TupleRestAtomic = _test_protobuf_message(
    "TupleRestAtomic",
    typia.protobuf.message<TupleRestAtomic>(),
);
