import typia from "../../../src";

import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_protobuf_createIsDecode_ObjectHttpUndefindable = _test_protobuf_isDecode(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(ObjectHttpUndefindable)({
    decode: (input) => typia.protobuf.isDecode<ObjectHttpUndefindable>(input),
    encode: typia.protobuf.createEncode<ObjectHttpUndefindable>(),
});
