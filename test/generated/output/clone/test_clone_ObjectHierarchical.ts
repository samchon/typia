import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
export const test_clone_ObjectHierarchical = _test_clone("ObjectHierarchical", ObjectHierarchical.generate, (input) => ((input: ObjectHierarchical.ICustomer): typia.Primitive<ObjectHierarchical.ICustomer> => {
    const $io1 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && "boolean" === typeof input.exclusive && "number" === typeof input.priority && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io2 = (input: any): boolean => "number" === typeof input.time && "number" === typeof input.zone;
    const $io3 = (input: any): boolean => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && (null === input.enterprise || "object" === typeof input.enterprise && null !== input.enterprise && $io5(input.enterprise)) && (Array.isArray(input.emails) && input.emails.every((elem: any) => "string" === typeof elem)) && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at)) && "boolean" === typeof input.authorized;
    const $io4 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.code && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io5 = (input: any): boolean => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && "string" === typeof input.name && "number" === typeof input.grade && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $co0 = (input: any): any => ({
        id: input.id as any,
        channel: "object" === typeof input.channel && null !== input.channel ? $co1(input.channel) : input.channel as any,
        member: "object" === typeof input.member && null !== input.member ? $co3(input.member) : input.member as any,
        account: "object" === typeof input.account && null !== input.account ? $co4(input.account) : input.account as any,
        href: input.href as any,
        referrer: input.referrer as any,
        ip: Array.isArray(input.ip) && (input.ip.length === 4 && "number" === typeof input.ip[0] && "number" === typeof input.ip[1] && "number" === typeof input.ip[2] && "number" === typeof input.ip[3]) ? [
            input.ip[0] as any,
            input.ip[1] as any,
            input.ip[2] as any,
            input.ip[3] as any
        ] as any : input.ip as any,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at as any
    });
    const $co1 = (input: any): any => ({
        id: input.id as any,
        code: input.code as any,
        name: input.name as any,
        sequence: input.sequence as any,
        exclusive: input.exclusive as any,
        priority: input.priority as any,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at as any
    });
    const $co2 = (input: any): any => ({
        time: input.time as any,
        zone: input.zone as any
    });
    const $co3 = (input: any): any => ({
        id: input.id as any,
        account: "object" === typeof input.account && null !== input.account ? $co4(input.account) : input.account as any,
        enterprise: "object" === typeof input.enterprise && null !== input.enterprise ? $co5(input.enterprise) : input.enterprise as any,
        emails: Array.isArray(input.emails) ? input.emails.map((elem: any) => elem as any) : input.emails as any,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at as any,
        authorized: input.authorized as any
    });
    const $co4 = (input: any): any => ({
        id: input.id as any,
        code: input.code as any,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at as any
    });
    const $co5 = (input: any): any => ({
        id: input.id as any,
        account: "object" === typeof input.account && null !== input.account ? $co4(input.account) : input.account as any,
        name: input.name as any,
        grade: input.grade as any,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co2(input.created_at) : input.created_at as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
