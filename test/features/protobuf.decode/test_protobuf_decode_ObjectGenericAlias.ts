import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_protobuf_createDecode_ObjectGenericAlias = _test_protobuf_decode(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)({
    decode: (input) => typia.protobuf.decode<ObjectGenericAlias>(input),
    encode: typia.protobuf.createEncode<ObjectGenericAlias>(),
});
