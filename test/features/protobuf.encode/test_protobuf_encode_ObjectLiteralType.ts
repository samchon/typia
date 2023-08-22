import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_encode_ObjectLiteralType = _test_protobuf_encode(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
    encode: (input) => typia.protobuf.encode<ObjectLiteralType>(input),
    message: typia.protobuf.message<ObjectLiteralType>(),
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
});
