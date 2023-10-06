import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_protobuf_message_ObjectHttpAtomic = _test_protobuf_message(
    "ObjectHttpAtomic",
)(typia.protobuf.message<ObjectHttpAtomic>());
