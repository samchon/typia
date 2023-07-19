import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_protobuf_message_ObjectUnionComposite =
    _test_protobuf_message("ObjectUnionComposite")(
        typia.protobuf.message<ObjectUnionComposite>(),
    );
