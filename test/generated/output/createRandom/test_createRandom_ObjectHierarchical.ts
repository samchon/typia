import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectHierarchical = _test_random("ObjectHierarchical", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        channel: $ro1(recursive, recursive ? 1 + depth : depth),
        member: $ro3(recursive, recursive ? 1 + depth : depth),
        account: $ro4(recursive, recursive ? 1 + depth : depth),
        href: (generator.string ?? $generator.string)(),
        referrer: (generator.string ?? $generator.string)(),
        ip: [
            (generator.number ?? $generator.number)(0, 100),
            (generator.number ?? $generator.number)(0, 100),
            (generator.number ?? $generator.number)(0, 100),
            (generator.number ?? $generator.number)(0, 100)
        ],
        created_at: $ro2(recursive, recursive ? 1 + depth : depth)
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        code: (generator.string ?? $generator.string)(),
        name: (generator.string ?? $generator.string)(),
        sequence: (generator.number ?? $generator.number)(0, 100),
        exclusive: (generator.boolean ?? $generator.boolean)(),
        priority: (generator.number ?? $generator.number)(0, 100),
        created_at: $ro2(recursive, recursive ? 1 + depth : depth)
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        time: (generator.number ?? $generator.number)(0, 100),
        zone: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        account: $ro4(recursive, recursive ? 1 + depth : depth),
        enterprise: $ro5(recursive, recursive ? 1 + depth : depth),
        emails: (generator.array ?? $generator.array)(() => (generator.string ?? $generator.string)()),
        created_at: $ro2(recursive, recursive ? 1 + depth : depth),
        authorized: (generator.boolean ?? $generator.boolean)()
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        code: (generator.string ?? $generator.string)(),
        created_at: $ro2(recursive, recursive ? 1 + depth : depth)
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        account: $ro4(recursive, recursive ? 1 + depth : depth),
        name: (generator.string ?? $generator.string)(),
        grade: (generator.number ?? $generator.number)(0, 100),
        created_at: $ro2(recursive, recursive ? 1 + depth : depth)
    });
    return $ro0();
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is { id: number; channel: { id: number; code: string; name: string; sequence: number; exclusive: boolean; priority: number; created_at: { time: number; zone: number; }; }; member: { id: number; account: { id: number; code: string; created_at: { ...; }; }; enterprise: { ...; }; emails: string[]; created_at: { ...; }; authorized: boolean; }; ... 4 more ...; created_at: { ...; }; } => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && (("object" === typeof input.channel && null !== input.channel || $guard(_exceptionable, {
            path: _path + ".channel",
            expected: "Resolve<__type.o1>",
            value: input.channel
        })) && $ao1(input.channel, _path + ".channel", true && _exceptionable)) && (("object" === typeof input.member && null !== input.member || $guard(_exceptionable, {
            path: _path + ".member",
            expected: "Resolve<__type.o3>",
            value: input.member
        })) && $ao3(input.member, _path + ".member", true && _exceptionable)) && (("object" === typeof input.account && null !== input.account || $guard(_exceptionable, {
            path: _path + ".account",
            expected: "Resolve<__type.o4>",
            value: input.account
        })) && $ao4(input.account, _path + ".account", true && _exceptionable)) && ("string" === typeof input.href || $guard(_exceptionable, {
            path: _path + ".href",
            expected: "string",
            value: input.href
        })) && ("string" === typeof input.referrer || $guard(_exceptionable, {
            path: _path + ".referrer",
            expected: "string",
            value: input.referrer
        })) && ((Array.isArray(input.ip) || $guard(_exceptionable, {
            path: _path + ".ip",
            expected: "Array<number>",
            value: input.ip
        })) && input.ip.every((elem: any, _index1: number) => "number" === typeof elem || $guard(_exceptionable, {
            path: _path + ".ip[" + _index1 + "]",
            expected: "number",
            value: elem
        }))) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<__type.o2>",
            value: input.created_at
        })) && $ao2(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.code || $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && ("boolean" === typeof input.exclusive || $guard(_exceptionable, {
            path: _path + ".exclusive",
            expected: "boolean",
            value: input.exclusive
        })) && ("number" === typeof input.priority || $guard(_exceptionable, {
            path: _path + ".priority",
            expected: "number",
            value: input.priority
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<__type.o2>",
            value: input.created_at
        })) && $ao2(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.time || $guard(_exceptionable, {
            path: _path + ".time",
            expected: "number",
            value: input.time
        })) && ("number" === typeof input.zone || $guard(_exceptionable, {
            path: _path + ".zone",
            expected: "number",
            value: input.zone
        }));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && (("object" === typeof input.account && null !== input.account || $guard(_exceptionable, {
            path: _path + ".account",
            expected: "Resolve<__type.o4>",
            value: input.account
        })) && $ao4(input.account, _path + ".account", true && _exceptionable)) && (("object" === typeof input.enterprise && null !== input.enterprise || $guard(_exceptionable, {
            path: _path + ".enterprise",
            expected: "Resolve<__type.o5>",
            value: input.enterprise
        })) && $ao5(input.enterprise, _path + ".enterprise", true && _exceptionable)) && ((Array.isArray(input.emails) || $guard(_exceptionable, {
            path: _path + ".emails",
            expected: "Array<string>",
            value: input.emails
        })) && input.emails.every((elem: any, _index2: number) => "string" === typeof elem || $guard(_exceptionable, {
            path: _path + ".emails[" + _index2 + "]",
            expected: "string",
            value: elem
        }))) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<__type.o2>",
            value: input.created_at
        })) && $ao2(input.created_at, _path + ".created_at", true && _exceptionable)) && ("boolean" === typeof input.authorized || $guard(_exceptionable, {
            path: _path + ".authorized",
            expected: "boolean",
            value: input.authorized
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.code || $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<__type.o2>",
            value: input.created_at
        })) && $ao2(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && (("object" === typeof input.account && null !== input.account || $guard(_exceptionable, {
            path: _path + ".account",
            expected: "Resolve<__type.o4>",
            value: input.account
        })) && $ao4(input.account, _path + ".account", true && _exceptionable)) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.grade || $guard(_exceptionable, {
            path: _path + ".grade",
            expected: "number",
            value: input.grade
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<__type.o2>",
            value: input.created_at
        })) && $ao2(input.created_at, _path + ".created_at", true && _exceptionable));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<__type>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as typia.Primitive<ObjectHierarchical>;
});
