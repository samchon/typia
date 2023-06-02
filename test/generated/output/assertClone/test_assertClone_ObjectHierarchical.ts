import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_assertClone_ObjectHierarchical = _test_assertClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) =>
        ((input: any): typia.Primitive<ObjectHierarchical.ICustomer> => {
            const assert: any = (input: any): ObjectHierarchical.ICustomer => {
                const __is: any = (
                    input: any,
                ): input is ObjectHierarchical.ICustomer => {
                    const $io0: any = (input: any): boolean =>
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
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone);
                    const $io1: any = (input: any): boolean =>
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
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone);
                    const $io3: any = (input: any): boolean =>
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
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone) &&
                        "boolean" === typeof input.authorized;
                    const $io4: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone);
                    const $io5: any = (input: any): boolean =>
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
                        "number" === typeof input.created_at.time &&
                        Number.isFinite(input.created_at.time) &&
                        "number" === typeof input.created_at.zone &&
                        Number.isFinite(input.created_at.zone);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectHierarchical.ICustomer => {
                        const $ao0: any = (
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
                                        expected:
                                            "(ObjectHierarchical.IMember | null)",
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
                                    expected:
                                        "[number, number, number, number]",
                                    value: input.ip,
                                })) &&
                            (input.ip.length === 4 ||
                                $guard(_exceptionable, {
                                    path: _path + ".ip",
                                    expected:
                                        "[number, number, number, number]",
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
                        const $ao1: any = (
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
                        const $ao2: any = (
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
                        const $ao3: any = (
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
                                        path:
                                            _path + ".emails[" + _index1 + "]",
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
                        const $ao4: any = (
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
                        const $ao5: any = (
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
            const clone: any = (
                input: ObjectHierarchical.ICustomer,
            ): typia.Primitive<ObjectHierarchical.ICustomer> => {
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "string" === typeof input.name &&
                    "number" === typeof input.sequence &&
                    "boolean" === typeof input.exclusive &&
                    "number" === typeof input.priority &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io2(input.created_at);
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                const $io3: any = (input: any): boolean =>
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
                const $io4: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io2(input.created_at);
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "object" === typeof input.account &&
                    null !== input.account &&
                    $io4(input.account) &&
                    "string" === typeof input.name &&
                    "number" === typeof input.grade &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io2(input.created_at);
                const $co0: any = (input: any): any => ({
                    id: input.id as any,
                    channel:
                        "object" === typeof input.channel &&
                        null !== input.channel
                            ? $co1(input.channel)
                            : (input.channel as any),
                    member:
                        "object" === typeof input.member &&
                        null !== input.member
                            ? $co3(input.member)
                            : (input.member as any),
                    account:
                        "object" === typeof input.account &&
                        null !== input.account
                            ? $co4(input.account)
                            : (input.account as any),
                    href: input.href as any,
                    referrer: input.referrer as any,
                    ip:
                        Array.isArray(input.ip) &&
                        input.ip.length === 4 &&
                        "number" === typeof input.ip[0] &&
                        "number" === typeof input.ip[1] &&
                        "number" === typeof input.ip[2] &&
                        "number" === typeof input.ip[3]
                            ? ([
                                  input.ip[0] as any,
                                  input.ip[1] as any,
                                  input.ip[2] as any,
                                  input.ip[3] as any,
                              ] as any)
                            : (input.ip as any),
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co2(input.created_at)
                            : (input.created_at as any),
                });
                const $co1: any = (input: any): any => ({
                    id: input.id as any,
                    code: input.code as any,
                    name: input.name as any,
                    sequence: input.sequence as any,
                    exclusive: input.exclusive as any,
                    priority: input.priority as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co2(input.created_at)
                            : (input.created_at as any),
                });
                const $co2: any = (input: any): any => ({
                    time: input.time as any,
                    zone: input.zone as any,
                });
                const $co3: any = (input: any): any => ({
                    id: input.id as any,
                    account:
                        "object" === typeof input.account &&
                        null !== input.account
                            ? $co4(input.account)
                            : (input.account as any),
                    enterprise:
                        "object" === typeof input.enterprise &&
                        null !== input.enterprise
                            ? $co5(input.enterprise)
                            : (input.enterprise as any),
                    emails: Array.isArray(input.emails)
                        ? (() => input.emails.map((elem: any) => elem as any))()
                        : (input.emails as any),
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co2(input.created_at)
                            : (input.created_at as any),
                    authorized: input.authorized as any,
                });
                const $co4: any = (input: any): any => ({
                    id: input.id as any,
                    code: input.code as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co2(input.created_at)
                            : (input.created_at as any),
                });
                const $co5: any = (input: any): any => ({
                    id: input.id as any,
                    account:
                        "object" === typeof input.account &&
                        null !== input.account
                            ? $co4(input.account)
                            : (input.account as any),
                    name: input.name as any,
                    grade: input.grade as any,
                    created_at:
                        "object" === typeof input.created_at &&
                        null !== input.created_at
                            ? $co2(input.created_at)
                            : (input.created_at as any),
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ObjectHierarchical.SPOILERS,
);
