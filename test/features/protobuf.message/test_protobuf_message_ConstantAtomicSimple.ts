import typia from "../../../src";
import { _test_protobuf_message } from "../../internal/_test_protobuf_message";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_protobuf_message_ConstantAtomicSimple =
    _test_protobuf_message("ConstantAtomicSimple")(
        typia.protobuf.message<ConstantAtomicSimple>(),
    );
