import typia from "../../../../src";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_assertStringify_ObjectHierarchical =
    _test_json_assertStringify("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )((input: any): string => {
        const assert = (input: any): ObjectHierarchical => {
            const __is = (input: any): input is ObjectHierarchical => {
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
                    input.emails.every(
                        (elem: any) => "string" === typeof elem,
                    ) &&
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
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectHierarchical => {
                    const $guard = (typia.json.createAssertStringify as any)
                        .guard;
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
                                expected:
                                    "(ObjectHierarchical.IAccount | null)",
                                value: input.account,
                            })) &&
                        (("string" === typeof input.href &&
                            (/^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                                input.href,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".href",
                                    expected: "string & Format<url>",
                                    value: input.href,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".href",
                                expected: "(string & Format<url>)",
                                value: input.href,
                            })) &&
                        (("string" === typeof input.referrer &&
                            (/^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                                input.referrer,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".referrer",
                                    expected: "string & Format<url>",
                                    value: input.referrer,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".referrer",
                                expected: "(string & Format<url>)",
                                value: input.referrer,
                            })) &&
                        (("string" === typeof input.ip &&
                            (/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                                input.ip,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ip",
                                    expected: "string & Format<ipv4>",
                                    value: input.ip,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ip",
                                expected: "(string & Format<ipv4>)",
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
                                            _path + ".emails[" + _index1 + "]",
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
        };
        const stringify = (input: ObjectHierarchical): string => {
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
                input.emails.every((elem: any) => "string" === typeof elem) &&
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
            const $number = (typia.json.createAssertStringify as any).number;
            const $string = (typia.json.createAssertStringify as any).string;
            const $so0 = (input: any): any =>
                `{"id":${$number(input.id)},"channel":${$so1(
                    input.channel,
                )},"member":${
                    null !== input.member ? $so3(input.member) : "null"
                },"account":${
                    null !== input.account ? $so4(input.account) : "null"
                },"href":${$string(input.href)},"referrer":${$string(
                    input.referrer,
                )},"ip":${$string(input.ip)},"created_at":${`{"time":${$number(
                    (input.created_at as any).time,
                )},"zone":${$number((input.created_at as any).zone)}}`}}`;
            const $so1 = (input: any): any =>
                `{"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"name":${$string(input.name)},"sequence":${$number(
                    input.sequence,
                )},"exclusive":${input.exclusive},"priority":${$number(
                    input.priority,
                )},"created_at":${`{"time":${$number(
                    (input.created_at as any).time,
                )},"zone":${$number((input.created_at as any).zone)}}`}}`;
            const $so3 = (input: any): any =>
                `{"id":${$number(input.id)},"account":${$so4(
                    input.account,
                )},"enterprise":${
                    null !== input.enterprise ? $so5(input.enterprise) : "null"
                },"emails":${`[${input.emails
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},"created_at":${`{"time":${$number(
                    (input.created_at as any).time,
                )},"zone":${$number(
                    (input.created_at as any).zone,
                )}}`},"authorized":${input.authorized}}`;
            const $so4 = (input: any): any =>
                `{"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"created_at":${`{"time":${$number(
                    (input.created_at as any).time,
                )},"zone":${$number((input.created_at as any).zone)}}`}}`;
            const $so5 = (input: any): any =>
                `{"id":${$number(input.id)},"account":${$so4(
                    input.account,
                )},"name":${$string(input.name)},"grade":${$number(
                    input.grade,
                )},"created_at":${`{"time":${$number(
                    (input.created_at as any).time,
                )},"zone":${$number((input.created_at as any).zone)}}`}}`;
            return $so0(input);
        };
        return stringify(assert(input));
    });
