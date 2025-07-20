import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createEncode_TemplateConstant = (): void =>
  _test_protobuf_encode("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    {
      encode: typia.protobuf.createEncode<TemplateConstant>(),
      decode: typia.protobuf.createDecode<TemplateConstant>(),
      message: typia.protobuf.message<TemplateConstant>(),
    },
  );
