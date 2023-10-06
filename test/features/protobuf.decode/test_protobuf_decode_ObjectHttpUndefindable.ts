import typia from "../../../src";

import { _test_protobuf_decode } from "../../internal/_test_protobuf_decode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createDecode_ObjectHttpUndefindable = _test_protobuf_decode(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    decode: (input) => typia.protobuf.decode<ObjectHttpUndefindable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
});
