import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_protobuf_message_ConstantConstEnumeration =
    _test_protobuf_message("ConstantConstEnumeration")(
        typia.protobuf.message<ConstantConstEnumeration>(),
    );
