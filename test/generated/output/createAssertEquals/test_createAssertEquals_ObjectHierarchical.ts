import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_createAssertEquals_ObjectHierarchical = _test_assertEquals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input: any): ObjectHierarchical => {
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectHierarchical => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
                "string" === typeof input.referrer &&
                Array.isArray(input.ip) &&
                input.ip.length === 4 &&
                "number" === typeof input.ip[0] &&
                Number.isFinite(input.ip[0]) &&
                "number" === typeof input.ip[1] &&
                Number.isFinite(input.ip[1]) &&
                "number" === typeof input.ip[2] &&
                Number.isFinite(input.ip[2]) &&
                "number" === typeof input.ip[3] &&
                Number.isFinite(input.ip[3]) &&
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
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
            const $io2 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
            const $io3 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
            const $io4 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
            const $io5 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
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
                            [
                                "id",
                                "account",
                                "name",
                                "grade",
                                "created_at",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectHierarchical => {
                const $guard = (typia.createAssertEquals as any).guard;
                const $join = (typia.createAssertEquals as any).join;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        })) &&
                    (((("object" === typeof input.channel &&
                        null !== input.channel) ||
                        $guard(_exceptionable, {
                            path: _path + ".channel",
                            expected: "ObjectHierarchical.IChannel",
                            value: input.channel,
                        })) &&
                        $ao1(
                            input.channel,
                            _path + ".channel",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".channel",
                            expected: "ObjectHierarchical.IChannel",
                            value: input.channel,
                        })) &&
                    (null === input.member ||
                        ((("object" === typeof input.member &&
                            null !== input.member) ||
                            $guard(_exceptionable, {
                                path: _path + ".member",
                                expected: "(ObjectHierarchical.IMember | null)",
                                value: input.member,
                            })) &&
                            $ao3(
                                input.member,
                                _path + ".member",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".member",
                            expected: "(ObjectHierarchical.IMember | null)",
                            value: input.member,
                        })) &&
                    (null === input.account ||
                        ((("object" === typeof input.account &&
                            null !== input.account) ||
                            $guard(_exceptionable, {
                                path: _path + ".account",
                                expected:
                                    "(ObjectHierarchical.IAccount | null)",
                                value: input.account,
                            })) &&
                            $ao4(
                                input.account,
                                _path + ".account",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".account",
                            expected: "(ObjectHierarchical.IAccount | null)",
                            value: input.account,
                        })) &&
                    ("string" === typeof input.href ||
                        $guard(_exceptionable, {
                            path: _path + ".href",
                            expected: "string",
                            value: input.href,
                        })) &&
                    ("string" === typeof input.referrer ||
                        $guard(_exceptionable, {
                            path: _path + ".referrer",
                            expected: "string",
                            value: input.referrer,
                        })) &&
                    (((Array.isArray(input.ip) ||
                        $guard(_exceptionable, {
                            path: _path + ".ip",
                            expected: "[number, number, number, number]",
                            value: input.ip,
                        })) &&
                        (input.ip.length === 4 ||
                            $guard(_exceptionable, {
                                path: _path + ".ip",
                                expected: "[number, number, number, number]",
                                value: input.ip,
                            })) &&
                        (("number" === typeof input.ip[0] &&
                            Number.isFinite(input.ip[0])) ||
                            $guard(_exceptionable, {
                                path: _path + ".ip[0]",
                                expected: "number",
                                value: input.ip[0],
                            })) &&
                        (("number" === typeof input.ip[1] &&
                            Number.isFinite(input.ip[1])) ||
                            $guard(_exceptionable, {
                                path: _path + ".ip[1]",
                                expected: "number",
                                value: input.ip[1],
                            })) &&
                        (("number" === typeof input.ip[2] &&
                            Number.isFinite(input.ip[2])) ||
                            $guard(_exceptionable, {
                                path: _path + ".ip[2]",
                                expected: "number",
                                value: input.ip[2],
                            })) &&
                        (("number" === typeof input.ip[3] &&
                            Number.isFinite(input.ip[3])) ||
                            $guard(_exceptionable, {
                                path: _path + ".ip[3]",
                                expected: "number",
                                value: input.ip[3],
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".ip",
                            expected: "[number, number, number, number]",
                            value: input.ip,
                        })) &&
                    (((("object" === typeof input.created_at &&
                        null !== input.created_at) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                        $ao2(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                    (8 === Object.keys(input).length ||
                        false === _exceptionable ||
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
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.code ||
                        $guard(_exceptionable, {
                            path: _path + ".code",
                            expected: "string",
                            value: input.code,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("number" === typeof input.sequence &&
                        Number.isFinite(input.sequence)) ||
                        $guard(_exceptionable, {
                            path: _path + ".sequence",
                            expected: "number",
                            value: input.sequence,
                        })) &&
                    ("boolean" === typeof input.exclusive ||
                        $guard(_exceptionable, {
                            path: _path + ".exclusive",
                            expected: "boolean",
                            value: input.exclusive,
                        })) &&
                    (("number" === typeof input.priority &&
                        Number.isFinite(input.priority)) ||
                        $guard(_exceptionable, {
                            path: _path + ".priority",
                            expected: "number",
                            value: input.priority,
                        })) &&
                    (((("object" === typeof input.created_at &&
                        null !== input.created_at) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                        $ao2(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                    (7 === Object.keys(input).length ||
                        false === _exceptionable ||
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
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.time &&
                        Number.isFinite(input.time)) ||
                        $guard(_exceptionable, {
                            path: _path + ".time",
                            expected: "number",
                            value: input.time,
                        })) &&
                    (("number" === typeof input.zone &&
                        Number.isFinite(input.zone)) ||
                        $guard(_exceptionable, {
                            path: _path + ".zone",
                            expected: "number",
                            value: input.zone,
                        })) &&
                    (2 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["time", "zone"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        })) &&
                    (((("object" === typeof input.account &&
                        null !== input.account) ||
                        $guard(_exceptionable, {
                            path: _path + ".account",
                            expected: "ObjectHierarchical.IAccount",
                            value: input.account,
                        })) &&
                        $ao4(
                            input.account,
                            _path + ".account",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".account",
                            expected: "ObjectHierarchical.IAccount",
                            value: input.account,
                        })) &&
                    (null === input.enterprise ||
                        ((("object" === typeof input.enterprise &&
                            null !== input.enterprise) ||
                            $guard(_exceptionable, {
                                path: _path + ".enterprise",
                                expected:
                                    "(ObjectHierarchical.IEnterprise | null)",
                                value: input.enterprise,
                            })) &&
                            $ao5(
                                input.enterprise,
                                _path + ".enterprise",
                                true && _exceptionable,
                            )) ||
                        $guard(_exceptionable, {
                            path: _path + ".enterprise",
                            expected: "(ObjectHierarchical.IEnterprise | null)",
                            value: input.enterprise,
                        })) &&
                    (((Array.isArray(input.emails) ||
                        $guard(_exceptionable, {
                            path: _path + ".emails",
                            expected: "Array<string>",
                            value: input.emails,
                        })) &&
                        input.emails.every(
                            (elem: any, _index1: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".emails[" + _index1 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".emails",
                            expected: "Array<string>",
                            value: input.emails,
                        })) &&
                    (((("object" === typeof input.created_at &&
                        null !== input.created_at) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                        $ao2(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                    ("boolean" === typeof input.authorized ||
                        $guard(_exceptionable, {
                            path: _path + ".authorized",
                            expected: "boolean",
                            value: input.authorized,
                        })) &&
                    (6 === Object.keys(input).length ||
                        false === _exceptionable ||
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
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.code ||
                        $guard(_exceptionable, {
                            path: _path + ".code",
                            expected: "string",
                            value: input.code,
                        })) &&
                    (((("object" === typeof input.created_at &&
                        null !== input.created_at) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                        $ao2(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                    (3 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "code", "created_at"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao5 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "number",
                            value: input.id,
                        })) &&
                    (((("object" === typeof input.account &&
                        null !== input.account) ||
                        $guard(_exceptionable, {
                            path: _path + ".account",
                            expected: "ObjectHierarchical.IAccount",
                            value: input.account,
                        })) &&
                        $ao4(
                            input.account,
                            _path + ".account",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".account",
                            expected: "ObjectHierarchical.IAccount",
                            value: input.account,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("number" === typeof input.grade &&
                        Number.isFinite(input.grade)) ||
                        $guard(_exceptionable, {
                            path: _path + ".grade",
                            expected: "number",
                            value: input.grade,
                        })) &&
                    (((("object" === typeof input.created_at &&
                        null !== input.created_at) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                        $ao2(
                            input.created_at,
                            _path + ".created_at",
                            true && _exceptionable,
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".created_at",
                            expected: "ObjectHierarchical.ITimestamp",
                            value: input.created_at,
                        })) &&
                    (5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "id",
                                    "account",
                                    "name",
                                    "grade",
                                    "created_at",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectHierarchical.ICustomer",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectHierarchical.ICustomer",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
);
