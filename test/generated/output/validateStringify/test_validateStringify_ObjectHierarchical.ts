import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ObjectHierarchical = _test_validateStringify("ObjectHierarchical", ObjectHierarchical.generate, (input) => ((input: ICustomer): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ICustomer> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ICustomer => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), ("object" === typeof input.channel && null !== input.channel || $report(_exceptionable, {
                path: _path + ".channel",
                expected: "Resolve<ObjectHierarchical.IChannel>",
                value: input.channel
            })) && $vo1(input.channel, _path + ".channel", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".channel",
                expected: "Resolve<ObjectHierarchical.IChannel>",
                value: input.channel
            }), ("object" === typeof input.member && null !== input.member || $report(_exceptionable, {
                path: _path + ".member",
                expected: "Resolve<ObjectHierarchical.IMember>",
                value: input.member
            })) && $vo3(input.member, _path + ".member", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".member",
                expected: "Resolve<ObjectHierarchical.IMember>",
                value: input.member
            }), ("object" === typeof input.account && null !== input.account || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            })) && $vo4(input.account, _path + ".account", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            }), "string" === typeof input.href || $report(_exceptionable, {
                path: _path + ".href",
                expected: "string",
                value: input.href
            }), "string" === typeof input.referrer || $report(_exceptionable, {
                path: _path + ".referrer",
                expected: "string",
                value: input.referrer
            }), (Array.isArray(input.ip) || $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip
            })) && ((input.ip.length === 4 || $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip
            })) && [
                "number" === typeof input.ip[0] && !Number.isNaN(input.ip[0]) || $report(_exceptionable, {
                    path: _path + ".ip[0]",
                    expected: "number",
                    value: input.ip[0]
                }),
                "number" === typeof input.ip[1] && !Number.isNaN(input.ip[1]) || $report(_exceptionable, {
                    path: _path + ".ip[1]",
                    expected: "number",
                    value: input.ip[1]
                }),
                "number" === typeof input.ip[2] && !Number.isNaN(input.ip[2]) || $report(_exceptionable, {
                    path: _path + ".ip[2]",
                    expected: "number",
                    value: input.ip[2]
                }),
                "number" === typeof input.ip[3] && !Number.isNaN(input.ip[3]) || $report(_exceptionable, {
                    path: _path + ".ip[3]",
                    expected: "number",
                    value: input.ip[3]
                })
            ].every((flag: boolean) => flag)) || $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.code || $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.sequence && !Number.isNaN(input.sequence) || $report(_exceptionable, {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence
            }), "boolean" === typeof input.exclusive || $report(_exceptionable, {
                path: _path + ".exclusive",
                expected: "boolean",
                value: input.exclusive
            }), "number" === typeof input.priority && !Number.isNaN(input.priority) || $report(_exceptionable, {
                path: _path + ".priority",
                expected: "number",
                value: input.priority
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.time && !Number.isNaN(input.time) || $report(_exceptionable, {
                path: _path + ".time",
                expected: "number",
                value: input.time
            }), "number" === typeof input.zone && !Number.isNaN(input.zone) || $report(_exceptionable, {
                path: _path + ".zone",
                expected: "number",
                value: input.zone
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), ("object" === typeof input.account && null !== input.account || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            })) && $vo4(input.account, _path + ".account", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            }), ("object" === typeof input.enterprise && null !== input.enterprise || $report(_exceptionable, {
                path: _path + ".enterprise",
                expected: "Resolve<ObjectHierarchical.IEnterprise>",
                value: input.enterprise
            })) && $vo5(input.enterprise, _path + ".enterprise", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".enterprise",
                expected: "Resolve<ObjectHierarchical.IEnterprise>",
                value: input.enterprise
            }), (Array.isArray(input.emails) || $report(_exceptionable, {
                path: _path + ".emails",
                expected: "Array<string>",
                value: input.emails
            })) && input.emails.map((elem: any, _index1: number) => "string" === typeof elem || $report(_exceptionable, {
                path: _path + ".emails[" + _index1 + "]",
                expected: "string",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".emails",
                expected: "Array<string>",
                value: input.emails
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            }), "boolean" === typeof input.authorized || $report(_exceptionable, {
                path: _path + ".authorized",
                expected: "boolean",
                value: input.authorized
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.code || $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), ("object" === typeof input.account && null !== input.account || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            })) && $vo4(input.account, _path + ".account", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".account",
                expected: "Resolve<ObjectHierarchical.IAccount>",
                value: input.account
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.grade && !Number.isNaN(input.grade) || $report(_exceptionable, {
                path: _path + ".grade",
                expected: "number",
                value: input.grade
            }), ("object" === typeof input.created_at && null !== input.created_at || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })) && $vo2(input.created_at, _path + ".created_at", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "Resolve<ObjectHierarchical.ITimestamp>",
                value: input.created_at
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectHierarchical.ICustomer>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectHierarchical.ICustomer>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ICustomer>;
}; const stringify = (input: ICustomer): string => {
    const $string = (typia.validateStringify as any).string;
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
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ObjectHierarchical.SPOILERS);
