import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createEncode_ObjectPartial = _test_protobuf_encode(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
    encode: typia.protobuf.createEncode<ObjectPartial>(),
    message: typia.protobuf.message<ObjectPartial>(),
    decode: typia.protobuf.createDecode<ObjectPartial>(),
});
