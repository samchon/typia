import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_protobuf_message_ObjectUnionCompositePointer =
  _test_protobuf_message("ObjectUnionCompositePointer")(
    typia.protobuf.message<ObjectUnionCompositePointer>(),
  );
