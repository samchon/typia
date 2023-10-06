import typia from "../../../src";

import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createIsEncode_TemplateAtomic = _test_protobuf_isEncode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    encode: typia.protobuf.createIsEncode<TemplateAtomic>(),
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    message: typia.protobuf.message<TemplateAtomic>(),
});
