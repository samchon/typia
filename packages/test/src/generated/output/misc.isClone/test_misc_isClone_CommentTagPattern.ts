import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_misc_isClone_CommentTagPattern = _test_misc_isClone(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
  ((input: any): typia.Resolved<CommentTagPattern> | null => {
    const is = (input: any): input is CommentTagPattern => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).uuid &&
        RegExp(
          /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
        ).test((input as any).uuid) &&
        "string" === typeof (input as any).email &&
        RegExp(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
        ).test((input as any).email) &&
        "string" === typeof (input as any).ipv4 &&
        RegExp(
          /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ).test((input as any).ipv4) &&
        "string" === typeof (input as any).ipv6 &&
        RegExp(
          /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        ).test((input as any).ipv6)
      );
    };
    const clone = (
      input: CommentTagPattern,
    ): typia.Resolved<CommentTagPattern> => {
      const $co0 = (input: any): any => ({
        uuid: input.uuid as any,
        email: input.email as any,
        ipv4: input.ipv4 as any,
        ipv6: input.ipv6 as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
