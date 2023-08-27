import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_misc_assertPrune_CommentTagFormat = _test_misc_assertPrune(
    "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
    ((input: any): CommentTagFormat => {
        const assert = (input: any): CommentTagFormat => {
            const __is = (input: any): input is CommentTagFormat => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).uuid &&
                    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                        (input as any).uuid,
                    ) &&
                    "string" === typeof (input as any).email &&
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                        (input as any).email,
                    ) &&
                    "string" === typeof (input as any).url &&
                    /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                        (input as any).url,
                    ) &&
                    "string" === typeof (input as any).ipv4 &&
                    /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                        (input as any).ipv4,
                    ) &&
                    "string" === typeof (input as any).ipv6 &&
                    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
                        (input as any).ipv6,
                    ) &&
                    "string" === typeof (input as any).date &&
                    /^(\d{4})-(\d{2})-(\d{2})$/.test((input as any).date) &&
                    "string" === typeof (input as any).date_time &&
                    !isNaN(new Date((input as any).date_time).getTime()) &&
                    "string" === typeof (input as any).custom
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is CommentTagFormat => {
                    const $guard = (typia.misc.assertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.uuid &&
                            (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                                input.uuid,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".uuid",
                                    expected: "string & Format<uuid>",
                                    value: input.uuid,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".uuid",
                                expected: "(string & Format<uuid>)",
                                value: input.uuid,
                            })) &&
                        (("string" === typeof input.email &&
                            (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                                input.email,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".email",
                                    expected: "string & Format<email>",
                                    value: input.email,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".email",
                                expected: "(string & Format<email>)",
                                value: input.email,
                            })) &&
                        (("string" === typeof input.url &&
                            (/^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                                input.url,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".url",
                                    expected: "string & Format<url>",
                                    value: input.url,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".url",
                                expected: "(string & Format<url>)",
                                value: input.url,
                            })) &&
                        (("string" === typeof input.ipv4 &&
                            (/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                                input.ipv4,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv4",
                                    expected: "string & Format<ipv4>",
                                    value: input.ipv4,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ipv4",
                                expected: "(string & Format<ipv4>)",
                                value: input.ipv4,
                            })) &&
                        (("string" === typeof input.ipv6 &&
                            (/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
                                input.ipv6,
                            ) ||
                                $guard(_exceptionable, {
                                    path: _path + ".ipv6",
                                    expected: "string & Format<ipv6>",
                                    value: input.ipv6,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".ipv6",
                                expected: "(string & Format<ipv6>)",
                                value: input.ipv6,
                            })) &&
                        (("string" === typeof input.date &&
                            (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date",
                                    expected: "string & Format<date>",
                                    value: input.date,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".date",
                                expected: "(string & Format<date>)",
                                value: input.date,
                            })) &&
                        (("string" === typeof input.date_time &&
                            (!isNaN(new Date(input.date_time).getTime()) ||
                                $guard(_exceptionable, {
                                    path: _path + ".date_time",
                                    expected: "string & Format<date-time>",
                                    value: input.date_time,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".date_time",
                                expected: "(string & Format<date-time>)",
                                value: input.date_time,
                            })) &&
                        ("string" === typeof input.custom ||
                            $guard(_exceptionable, {
                                path: _path + ".custom",
                                expected: "string",
                                value: input.custom,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "CommentTagFormat",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "CommentTagFormat",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: CommentTagFormat): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "uuid" === key ||
                        "email" === key ||
                        "url" === key ||
                        "ipv4" === key ||
                        "ipv6" === key ||
                        "date" === key ||
                        "date_time" === key ||
                        "custom" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    })(input),
);
