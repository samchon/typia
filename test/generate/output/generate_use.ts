"use strict";
"use server";

import typia, { tags } from "typia";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";

(() => {
  return (input: any): input is string & tags.Format<"uuid"> =>
    "string" === typeof input &&
    __typia_transform__isFormatUuid._isFormatUuid(input);
})();
