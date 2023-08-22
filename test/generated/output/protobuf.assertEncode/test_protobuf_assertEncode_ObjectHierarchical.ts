import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_protobuf_assertEncode_ObjectHierarchical =
    _test_protobuf_assertEncode("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ObjectHierarchical => {
                    const __is = (input: any): input is ObjectHierarchical => {
                        const $is_url = (typia.protobuf.assertEncode as any)
                            .is_url;
                        const $is_ipv4 = (typia.protobuf.assertEncode as any)
                            .is_ipv4;
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
                            $is_url(input.href) &&
                            "string" === typeof input.referrer &&
                            $is_url(input.referrer) &&
                            "string" === typeof input.ip &&
                            $is_ipv4(input.ip) &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
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
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
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
                            input.emails.every(
                                (elem: any) => "string" === typeof elem,
                            ) &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
                            Number.isFinite((input.created_at as any).zone) &&
                            "boolean" === typeof input.authorized;
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.code &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
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
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
                            Number.isFinite((input.created_at as any).zone);
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectHierarchical => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $is_url = (typia.protobuf.assertEncode as any)
                                .is_url;
                            const $is_ipv4 = (
                                typia.protobuf.assertEncode as any
                            ).is_ipv4;
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
                                            expected:
                                                "(ObjectHierarchical.IMember | null)",
                                            value: input.member,
                                        })) &&
                                        $ao3(
                                            input.member,
                                            _path + ".member",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".member",
                                        expected:
                                            "(ObjectHierarchical.IMember | null)",
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
                                        expected:
                                            "(ObjectHierarchical.IAccount | null)",
                                        value: input.account,
                                    })) &&
                                (("string" === typeof input.href &&
                                    ($is_url(input.href) ||
                                        $guard(_exceptionable, {
                                            path: _path + ".href",
                                            expected: "string (@format url)",
                                            value: input.href,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".href",
                                        expected: "string",
                                        value: input.href,
                                    })) &&
                                (("string" === typeof input.referrer &&
                                    ($is_url(input.referrer) ||
                                        $guard(_exceptionable, {
                                            path: _path + ".referrer",
                                            expected: "string (@format url)",
                                            value: input.referrer,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".referrer",
                                        expected: "string",
                                        value: input.referrer,
                                    })) &&
                                (("string" === typeof input.ip &&
                                    ($is_ipv4(input.ip) ||
                                        $guard(_exceptionable, {
                                            path: _path + ".ip",
                                            expected: "string (@format ipv4)",
                                            value: input.ip,
                                        }))) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".ip",
                                        expected: "string",
                                        value: input.ip,
                                    })) &&
                                (((("object" === typeof input.created_at &&
                                    null !== input.created_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
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
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
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
                                        expected:
                                            "(ObjectHierarchical.IEnterprise | null)",
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
                                                path:
                                                    _path +
                                                    ".emails[" +
                                                    _index1 +
                                                    "]",
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
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    })) &&
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
                                (((("object" === typeof input.created_at &&
                                    null !== input.created_at) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
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
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    })) &&
                                    $ao2(
                                        input.created_at,
                                        _path + ".created_at",
                                        true && _exceptionable,
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected:
                                            "ObjectHierarchical.ITimestamp",
                                        value: input.created_at,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "ObjectHierarchical.ICustomer",
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
                };
                const encode = (input: ObjectHierarchical): Uint8Array => {
                    const $is_url = (typia.protobuf.assertEncode as any).is_url;
                    const $is_ipv4 = (typia.protobuf.assertEncode as any)
                        .is_ipv4;
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "channel";
                            writer.uint32(18);
                            writer.fork();
                            $peo1(input.channel);
                            writer.ldelim();
                            // property "member";
                            if (null != input.member) {
                                writer.uint32(26);
                                writer.fork();
                                $peo3(input.member);
                                writer.ldelim();
                            }
                            // property "account";
                            if (null != input.account) {
                                writer.uint32(34);
                                writer.fork();
                                $peo4(input.account);
                                writer.ldelim();
                            }
                            // property "href";
                            writer.uint32(42);
                            writer.string(input.href);
                            // property "referrer";
                            writer.uint32(50);
                            writer.string(input.referrer);
                            // property "ip";
                            writer.uint32(58);
                            writer.string(input.ip);
                            // property "created_at";
                            writer.uint32(66);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                        };
                        const $peo1 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "code";
                            writer.uint32(18);
                            writer.string(input.code);
                            // property "name";
                            writer.uint32(26);
                            writer.string(input.name);
                            // property "sequence";
                            writer.uint32(33);
                            writer.double(input.sequence);
                            // property "exclusive";
                            writer.uint32(40);
                            writer.bool(input.exclusive);
                            // property "priority";
                            writer.uint32(49);
                            writer.double(input.priority);
                            // property "created_at";
                            writer.uint32(58);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                        };
                        const $peo2 = (input: any): any => {
                            // property "time";
                            writer.uint32(9);
                            writer.double(input.time);
                            // property "zone";
                            writer.uint32(17);
                            writer.double(input.zone);
                        };
                        const $peo3 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "account";
                            writer.uint32(18);
                            writer.fork();
                            $peo4(input.account);
                            writer.ldelim();
                            // property "enterprise";
                            if (null != input.enterprise) {
                                writer.uint32(26);
                                writer.fork();
                                $peo5(input.enterprise);
                                writer.ldelim();
                            }
                            // property "emails";
                            if (0 !== input.emails.length) {
                                for (const elem of input.emails) {
                                    writer.uint32(34);
                                    writer.string(elem);
                                }
                            }
                            // property "created_at";
                            writer.uint32(42);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                            // property "authorized";
                            writer.uint32(48);
                            writer.bool(input.authorized);
                        };
                        const $peo4 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "code";
                            writer.uint32(18);
                            writer.string(input.code);
                            // property "created_at";
                            writer.uint32(26);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                        };
                        const $peo5 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "account";
                            writer.uint32(18);
                            writer.fork();
                            $peo4(input.account);
                            writer.ldelim();
                            // property "name";
                            writer.uint32(26);
                            writer.string(input.name);
                            // property "grade";
                            writer.uint32(33);
                            writer.double(input.grade);
                            // property "created_at";
                            writer.uint32(42);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                        };
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.code &&
                            "string" === typeof input.name &&
                            "number" === typeof input.sequence &&
                            "boolean" === typeof input.exclusive &&
                            "number" === typeof input.priority &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io2(input.created_at);
                        const $io2 = (input: any): boolean =>
                            "number" === typeof input.time &&
                            "number" === typeof input.zone;
                        const $io3 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "object" === typeof input.account &&
                            null !== input.account &&
                            $io4(input.account) &&
                            (null === input.enterprise ||
                                ("object" === typeof input.enterprise &&
                                    null !== input.enterprise &&
                                    $io5(input.enterprise))) &&
                            Array.isArray(input.emails) &&
                            input.emails.every(
                                (elem: any) => "string" === typeof elem,
                            ) &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io2(input.created_at) &&
                            "boolean" === typeof input.authorized;
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.code &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io2(input.created_at);
                        const $io5 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "object" === typeof input.account &&
                            null !== input.account &&
                            $io4(input.account) &&
                            "string" === typeof input.name &&
                            "number" === typeof input.grade &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io2(input.created_at);
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectHierarchical {\n    message ICustomer {\n        required double id = 1;\n        required ObjectHierarchical.IChannel channel = 2;\n        optional ObjectHierarchical.IMember member = 3;\n        optional ObjectHierarchical.IAccount account = 4;\n        required string href = 5;\n        required string referrer = 6;\n        required string ip = 7;\n        required ObjectHierarchical.ITimestamp created_at = 8;\n    }\n\n    message IChannel {\n        required double id = 1;\n        required string code = 2;\n        required string name = 3;\n        required double sequence = 4;\n        required bool exclusive = 5;\n        required double priority = 6;\n        required ObjectHierarchical.ITimestamp created_at = 7;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n\n    message IMember {\n        required double id = 1;\n        required ObjectHierarchical.IAccount account = 2;\n        optional ObjectHierarchical.IEnterprise enterprise = 3;\n        repeated string emails = 4;\n        required ObjectHierarchical.ITimestamp created_at = 5;\n        required bool authorized = 6;\n    }\n\n    message IAccount {\n        required double id = 1;\n        required string code = 2;\n        required ObjectHierarchical.ITimestamp created_at = 3;\n    }\n\n    message IEnterprise {\n        required double id = 1;\n        required ObjectHierarchical.IAccount account = 2;\n        required string name = 3;\n        required double grade = 4;\n        required ObjectHierarchical.ITimestamp created_at = 5;\n    }\n}',
        decode: (input: Uint8Array): ObjectHierarchical => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: undefined as any,
                    channel: undefined as any,
                    member: null as any,
                    account: null as any,
                    href: "" as any,
                    referrer: "" as any,
                    ip: "" as any,
                    created_at: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.id = reader.double();
                            break;
                        case 2:
                            output.channel = $pdo1(reader, reader.uint32());
                            break;
                        case 3:
                            output.member = $pdo3(reader, reader.uint32());
                            break;
                        case 4:
                            output.account = $pdo4(reader, reader.uint32());
                            break;
                        case 5:
                            output.href = reader.string();
                            break;
                        case 6:
                            output.referrer = reader.string();
                            break;
                        case 7:
                            output.ip = reader.string();
                            break;
                        case 8:
                            output.created_at = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo1 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: undefined as any,
                    code: "" as any,
                    name: "" as any,
                    sequence: undefined as any,
                    exclusive: undefined as any,
                    priority: undefined as any,
                    created_at: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.id = reader.double();
                            break;
                        case 2:
                            output.code = reader.string();
                            break;
                        case 3:
                            output.name = reader.string();
                            break;
                        case 4:
                            output.sequence = reader.double();
                            break;
                        case 5:
                            output.exclusive = reader.bool();
                            break;
                        case 6:
                            output.priority = reader.double();
                            break;
                        case 7:
                            output.created_at = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo2 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    time: undefined as any,
                    zone: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.time = reader.double();
                            break;
                        case 2:
                            output.zone = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo3 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: undefined as any,
                    account: undefined as any,
                    enterprise: null as any,
                    emails: [] as any,
                    created_at: undefined as any,
                    authorized: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.id = reader.double();
                            break;
                        case 2:
                            output.account = $pdo4(reader, reader.uint32());
                            break;
                        case 3:
                            output.enterprise = $pdo5(reader, reader.uint32());
                            break;
                        case 4:
                            output.emails.push(reader.string());
                            break;
                        case 5:
                            output.created_at = $pdo2(reader, reader.uint32());
                            break;
                        case 6:
                            output.authorized = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo4 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: undefined as any,
                    code: "" as any,
                    created_at: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.id = reader.double();
                            break;
                        case 2:
                            output.code = reader.string();
                            break;
                        case 3:
                            output.created_at = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo5 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: undefined as any,
                    account: undefined as any,
                    name: "" as any,
                    grade: undefined as any,
                    created_at: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            output.id = reader.double();
                            break;
                        case 2:
                            output.account = $pdo4(reader, reader.uint32());
                            break;
                        case 3:
                            output.name = reader.string();
                            break;
                        case 4:
                            output.grade = reader.double();
                            break;
                        case 5:
                            output.created_at = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        },
    });
