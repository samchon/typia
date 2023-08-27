import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_is_ObjectHierarchical = _test_is(
    "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)(
    (input: any): input is ObjectHierarchical => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.channel &&
            null !== input.channel &&
            $io1(input.channel) &&
            (null === input.member ||
                ("object" === typeof input.member &&
                    null !== input.member &&
                    $io3(input.member))) &&
            (null === input.account ||
                ("object" === typeof input.account &&
                    null !== input.account &&
                    $io4(input.account))) &&
            "string" === typeof input.href &&
            /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                input.href,
            ) &&
            "string" === typeof input.referrer &&
            /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                input.referrer,
            ) &&
            "string" === typeof input.ip &&
            /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                input.ip,
            ) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
        const $io1 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "string" === typeof input.name &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "boolean" === typeof input.exclusive &&
            "number" === typeof input.priority &&
            Number.isFinite(input.priority) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
        const $io3 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account) &&
            (null === input.enterprise ||
                ("object" === typeof input.enterprise &&
                    null !== input.enterprise &&
                    $io5(input.enterprise))) &&
            Array.isArray(input.emails) &&
            input.emails.every((elem: any) => "string" === typeof elem) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone) &&
            "boolean" === typeof input.authorized;
        const $io4 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
        const $io5 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account) &&
            "string" === typeof input.name &&
            "number" === typeof input.grade &&
            Number.isFinite(input.grade) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
        return "object" === typeof input && null !== input && $io0(input);
    },
);
