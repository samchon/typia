import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_createAssertParse_ObjectHierarchical = _test_assertParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input: string): typia.Primitive<ObjectHierarchical> => {
        const assert = (input: any): ObjectHierarchical => {
            const $guard = (typia.createAssertParse as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectHierarchical => {
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
                    (("object" === typeof input.channel &&
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
                    ) &&
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
                            ))) &&
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
                            ))) &&
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
                    (Array.isArray(input.ip) ||
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
                        })) &&
                    (("object" === typeof input.created_at &&
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
                    );
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
                    (("object" === typeof input.created_at &&
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
                    );
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
                    (("object" === typeof input.account &&
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
                    ) &&
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
                            ))) &&
                    (Array.isArray(input.emails) ||
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
                    ) &&
                    (("object" === typeof input.created_at &&
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
                    ) &&
                    ("boolean" === typeof input.authorized ||
                        $guard(_exceptionable, {
                            path: _path + ".authorized",
                            expected: "boolean",
                            value: input.authorized,
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
                    (("object" === typeof input.created_at &&
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
                    );
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
                    (("object" === typeof input.account &&
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
                    ) &&
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
                    (("object" === typeof input.created_at &&
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
                    );
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectHierarchical.ICustomer",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input);
    },
    ObjectHierarchical.SPOILERS,
);
