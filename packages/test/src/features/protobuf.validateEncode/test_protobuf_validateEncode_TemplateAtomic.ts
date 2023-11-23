import typia from "typia";

import { _test_protobuf_validateEncode } from "../../internal/_test_protobuf_validateEncode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_protobuf_createValidateEncode_TemplateAtomic =
  _test_protobuf_validateEncode("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )({
    encode: (input) => typia.protobuf.validateEncode<TemplateAtomic>(input),
    decode: typia.protobuf.createDecode<TemplateAtomic>(),
    message: typia.protobuf.message<TemplateAtomic>(),
  });
