import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_protobuf_encode_ObjectUnionExplicitPointer =
    _test_protobuf_encode(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)({
        encode: typia.protobuf.createEncode<ObjectUnionExplicitPointer>(),
        message: typia.protobuf.message<ObjectUnionExplicitPointer>(),
        decode: typia.protobuf.createDecode<ObjectUnionExplicitPointer>(),
    });
