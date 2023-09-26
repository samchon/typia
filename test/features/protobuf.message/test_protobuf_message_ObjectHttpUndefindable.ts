import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_message_ObjectHttpUndefindable =
    _test_protobuf_message("ObjectHttpUndefindable")(
        typia.protobuf.message<ObjectHttpUndefindable>(),
    );
