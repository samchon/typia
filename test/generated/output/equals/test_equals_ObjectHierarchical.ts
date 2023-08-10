import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_equals_ObjectHierarchical = _test_equals<ObjectHierarchical>(
    ObjectHierarchical,
)((input) =>
    ((
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectHierarchical.ICustomer => {
        const $is_url = (typia.equals as any).is_url;
        const $is_ipv4 = (typia.equals as any).is_ipv4;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.channel &&
            null !== input.channel &&
            $io1(input.channel, true && _exceptionable) &&
            (null === input.member ||
                ("object" === typeof input.member &&
                    null !== input.member &&
                    $io3(input.member, true && _exceptionable))) &&
            (null === input.account ||
                ("object" === typeof input.account &&
                    null !== input.account &&
                    $io4(input.account, true && _exceptionable))) &&
            "string" === typeof input.href &&
            $is_url(input.href) &&
            "string" === typeof input.referrer &&
            $is_url(input.referrer) &&
            "string" === typeof input.ip &&
            $is_ipv4(input.ip) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io2(input.created_at, true && _exceptionable) &&
            (8 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "id",
                            "channel",
                            "member",
                            "account",
                            "href",
                            "referrer",
                            "ip",
                            "created_at",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
            $io2(input.created_at, true && _exceptionable) &&
            (7 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "id",
                            "code",
                            "name",
                            "sequence",
                            "exclusive",
                            "priority",
                            "created_at",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.time &&
            Number.isFinite(input.time) &&
            "number" === typeof input.zone &&
            Number.isFinite(input.zone) &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["time", "zone"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account, true && _exceptionable) &&
            (null === input.enterprise ||
                ("object" === typeof input.enterprise &&
                    null !== input.enterprise &&
                    $io5(input.enterprise, true && _exceptionable))) &&
            Array.isArray(input.emails) &&
            input.emails.every(
                (elem: any, _index1: number) => "string" === typeof elem,
            ) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io2(input.created_at, true && _exceptionable) &&
            "boolean" === typeof input.authorized &&
            (6 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "id",
                            "account",
                            "enterprise",
                            "emails",
                            "created_at",
                            "authorized",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io2(input.created_at, true && _exceptionable) &&
            (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "code", "created_at"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account, true && _exceptionable) &&
            "string" === typeof input.name &&
            "number" === typeof input.grade &&
            Number.isFinite(input.grade) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io2(input.created_at, true && _exceptionable) &&
            (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "account", "name", "grade", "created_at"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);
