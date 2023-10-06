import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createDecode_ObjectPartial = _test_protobuf_decode(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
    decode: typia.protobuf.createDecode<ObjectPartial>(),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
});
