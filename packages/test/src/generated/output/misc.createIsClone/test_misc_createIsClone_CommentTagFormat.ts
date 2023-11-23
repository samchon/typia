import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_misc_createIsClone_CommentTagFormat = _test_misc_isClone(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
  (input: any): typia.Resolved<CommentTagFormat> | null => {
    const is = (input: any): input is CommentTagFormat => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).uuid &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
          (input as any).uuid,
        ) &&
        "string" === typeof (input as any).email &&
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          (input as any).email,
        ) &&
        "string" === typeof (input as any).url &&
        /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
          (input as any).url,
        ) &&
        "string" === typeof (input as any).ipv4 &&
        /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          (input as any).ipv4,
        ) &&
        "string" === typeof (input as any).ipv6 &&
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
          (input as any).ipv6,
        ) &&
        "string" === typeof (input as any).date &&
        /^(\d{4})-(\d{2})-(\d{2})$/.test((input as any).date) &&
        "string" === typeof (input as any).date_time &&
        !isNaN(new Date((input as any).date_time).getTime()) &&
        "string" === typeof (input as any).custom
      );
    };
    const clone = (
      input: CommentTagFormat,
    ): typia.Resolved<CommentTagFormat> => {
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
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
