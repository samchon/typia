import typia from "../../../src";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createValidateEncode_TemplateAtomic = _test_protobuf_validateEncode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    encode: typia.protobuf.createValidateEncode<TemplateAtomic>(),
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    message: typia.protobuf.message<TemplateAtomic>(),
});
