import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectHierarchical = _test_stringify("ObjectHierarchical", ObjectHierarchical.generate, (input: ICustomer): string => {
    const $string = (typia.createStringify as any).string;
    const $io1 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && "boolean" === typeof input.exclusive && "number" === typeof input.priority && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io2 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $io3 = (input: any) => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && ("object" === typeof input.enterprise && null !== input.enterprise && $io5(input.enterprise)) && (Array.isArray(input.emails) && input.emails.every((elem: any) => "string" === typeof elem)) && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at)) && "boolean" === typeof input.authorized;
    const $io4 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $io5 = (input: any) => "number" === typeof input.id && ("object" === typeof input.account && null !== input.account && $io4(input.account)) && "string" === typeof input.name && "number" === typeof input.grade && ("object" === typeof input.created_at && null !== input.created_at && $io2(input.created_at));
    const $so0 = (input: any) => `{"id":${input.id},"channel":${$so1(input.channel)},"member":${$so3(input.member)},"account":${$so4(input.account)},"href":${$string(input.href)},"referrer":${$string(input.referrer)},"ip":${`[${input.ip[0]},${input.ip[1]},${input.ip[2]},${input.ip[3]}]`},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    const $so1 = (input: any) => `{"id":${input.id},"code":${$string(input.code)},"name":${$string(input.name)},"sequence":${input.sequence},"exclusive":${input.exclusive},"priority":${input.priority},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    const $so3 = (input: any) => `{"id":${input.id},"account":${$so4(input.account)},"enterprise":${$so5(input.enterprise)},"emails":${`[${input.emails.map((elem: any) => $string(elem)).join(",")}]`},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`},"authorized":${input.authorized}}`;
    const $so4 = (input: any) => `{"id":${input.id},"code":${$string(input.code)},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    const $so5 = (input: any) => `{"id":${input.id},"account":${$so4(input.account)},"name":${$string(input.name)},"grade":${input.grade},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
});
