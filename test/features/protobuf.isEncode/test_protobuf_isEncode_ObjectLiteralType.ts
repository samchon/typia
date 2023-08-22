import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_protobuf_isEncode_ObjectLiteralType = _test_protobuf_isEncode(
    "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)({
    isEncode: (input) => typia.protobuf.isEncode<ObjectLiteralType>(input),
    message: typia.protobuf.message<ObjectLiteralType>(),
    decode: typia.protobuf.createDecode<ObjectLiteralType>(),
});
