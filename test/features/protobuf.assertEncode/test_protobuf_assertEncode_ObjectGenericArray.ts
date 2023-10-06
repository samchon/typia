import typia from "../../../src";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_protobuf_createAssertEncode_ObjectGenericArray = _test_protobuf_assertEncode(
    "ObjectGenericArray",
)<ObjectGenericArray>(ObjectGenericArray)({
    encode: (input) => typia.protobuf.assertEncode<ObjectGenericArray>(input),
    decode: typia.protobuf.createDecode<ObjectGenericArray>(),
    message: typia.protobuf.message<ObjectGenericArray>(),
});
