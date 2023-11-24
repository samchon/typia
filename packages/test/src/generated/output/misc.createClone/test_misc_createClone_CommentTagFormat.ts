import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_misc_createClone_CommentTagFormat = _test_misc_clone(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
  (input: CommentTagFormat): typia.Resolved<CommentTagFormat> => {
    const $co0 = (input: any): any => ({
      uuid: input.uuid as any,
      email: input.email as any,
      url: input.url as any,
      ipv4: input.ipv4 as any,
      ipv6: input.ipv6 as any,
      date: input.date as any,
      date_time: input.date_time as any,
      custom: input.custom as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  },
);
