import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createEncode_ObjectHttpUndefindable =
    _test_protobuf_encode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )({
        encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
        decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
        message: typia.protobuf.message<ObjectHttpUndefindable>(),
    });
