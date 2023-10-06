import typia from "../../../src";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_protobuf_createIsDecode_ObjectPartial = _test_protobuf_isDecode(
    "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
    decode: typia.protobuf.createIsDecode<ObjectPartial>(),
    encode: typia.protobuf.createEncode<ObjectPartial>(),
});
