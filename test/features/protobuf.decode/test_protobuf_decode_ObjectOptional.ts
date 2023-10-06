import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_createDecode_ObjectOptional = _test_protobuf_decode(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    decode: (input) => typia.protobuf.decode<ObjectOptional>(input),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
});
