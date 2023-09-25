import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_encode_ObjectHttpUndefindable =
    _test_protobuf_encode("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )({
        encode: (input) => typia.protobuf.encode<ObjectHttpUndefindable>(input),
        message: typia.protobuf.message<ObjectHttpUndefindable>(),
        decode: typia.protobuf.createDecode<ObjectHttpUndefindable>(),
    });
