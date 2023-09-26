import typia from "../../../src";
import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_protobuf_createDecode_ObjectSimple = _test_protobuf_decode(
    "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
    decode: typia.protobuf.createDecode<ObjectSimple>(),
    encode: typia.protobuf.createEncode<ObjectSimple>(),
});
