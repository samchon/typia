import typia from "typia";

import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_protobuf_createEncode_TemplateConstant =
  _test_protobuf_encode("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    {
      encode: (input) => typia.protobuf.encode<TemplateConstant>(input),
      decode: typia.protobuf.createDecode<TemplateConstant>(),
      message: typia.protobuf.message<TemplateConstant>(),
    },
  );
