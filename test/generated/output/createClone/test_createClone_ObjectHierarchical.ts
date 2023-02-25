import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ObjectHierarchical = _test_clone("ObjectHierarchical", ObjectHierarchical.generate, (input: ICustomer): typia.Primitive<ICustomer> => {
    const $io1 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && "boolean" === typeof input.exclusive && "number" === typeof input.priority && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io2 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $io3 = (input: any) => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && ("object" === typeof input.enterprise && null !== input.enterprise && $io5(input.enterprise)) && (Array.isArray(input.emails) && input.emails.every((elem: any) => "string" === typeof elem)) && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at)) && "boolean" === typeof input.authorized;
    const $io4 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io5 = (input: any) => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && "string" === typeof input.name && "number" === typeof input.grade && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $co0 = (input: any) => ({
        id: input.id,
        channel: "object" === typeof input.channel && null !== input.channel ? $co1(input.channel) : input.channel,
        member: "object" === typeof input.member && null !== input.member ? $co3(input.member) : input.member,
        account: "object" === typeof input.account && null !== input.account ? $co4(input.account) : input.account,
        href: input.href,
        referrer: input.referrer,
        ip: Array.isArray(input.ip) && (input.ip.length === 4 && "number" === typeof input.ip[0] && "number" === typeof input.ip[1] && "number" === typeof input.ip[2] && "number" === typeof input.ip[3]) ? [
            input.ip[0],
            input.ip[1],
            input.ip[2],
            input.ip[3]
        ] : input.ip,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at
    });
    const $co1 = (input: any) => ({
        id: input.id,
        code: input.code,
        name: input.name,
        sequence: input.sequence,
        exclusive: input.exclusive,
        priority: input.priority,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at
    });
    const $co2 = (input: any) => ({
        time: input.time,
        zone: input.zone
    });
    const $co3 = (input: any) => ({
        id: input.id,
        account: "object" === typeof input.account && null !== input.account ? $co4(input.account) : input.account,
        enterprise: "object" === typeof input.enterprise && null !== input.enterprise ? $co5(input.enterprise) : input.enterprise,
        emails: Array.isArray(input.emails) ? input.emails.map((elem: any) => elem) : input.emails,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at,
        authorized: input.authorized
    });
    const $co4 = (input: any) => ({
        id: input.id,
        code: input.code,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at
    });
    const $co5 = (input: any) => ({
        id: input.id,
        account: "object" === typeof input.account && null !== input.account ? $co4(input.account) : input.account,
        name: input.name,
        grade: input.grade,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
