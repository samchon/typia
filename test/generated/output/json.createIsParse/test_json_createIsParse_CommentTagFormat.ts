import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_json_isParse_CommentTagFormat = _test_json_isParse(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
    (input: any): typia.Primitive<CommentTagFormat> => {
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
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    },
);
