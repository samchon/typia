import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_validateEquals_ObjectHierarchical = _test_validateEquals(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  ((input: any): typia.IValidation<ObjectHierarchical> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectHierarchical => {
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
            if (["time", "zone"].some((prop: any) => key === prop)) return true;
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
            if (["id", "code", "created_at"].some((prop: any) => key === prop))
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
    };
    if (false === __is(input)) {
      const $report = (typia.validateEquals as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHierarchical => {
        const $join = (typia.validateEquals as any).join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.id && Number.isFinite(input.id)) ||
              $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              }),
            ((("object" === typeof input.channel && null !== input.channel) ||
              $report(_exceptionable, {
                path: _path + ".channel",
                expected: "ObjectHierarchical.IChannel",
                value: input.channel,
              })) &&
              $vo1(
                input.channel,
                _path + ".channel",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".channel",
                expected: "ObjectHierarchical.IChannel",
                value: input.channel,
              }),
            null === input.member ||
              ((("object" === typeof input.member && null !== input.member) ||
                $report(_exceptionable, {
                  path: _path + ".member",
                  expected: "(ObjectHierarchical.IMember | null)",
                  value: input.member,
                })) &&
                $vo3(
                  input.member,
                  _path + ".member",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".member",
                expected: "(ObjectHierarchical.IMember | null)",
                value: input.member,
              }),
            null === input.account ||
              ((("object" === typeof input.account && null !== input.account) ||
                $report(_exceptionable, {
                  path: _path + ".account",
                  expected: "(ObjectHierarchical.IAccount | null)",
                  value: input.account,
                })) &&
                $vo4(
                  input.account,
                  _path + ".account",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".account",
                expected: "(ObjectHierarchical.IAccount | null)",
                value: input.account,
              }),
            "string" === typeof input.href ||
              $report(_exceptionable, {
                path: _path + ".href",
                expected: "string",
                value: input.href,
              }),
            "string" === typeof input.referrer ||
              $report(_exceptionable, {
                path: _path + ".referrer",
                expected: "string",
                value: input.referrer,
              }),
            ((Array.isArray(input.ip) ||
              $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip,
              })) &&
              (input.ip.length === 4 ||
                $report(_exceptionable, {
                  path: _path + ".ip",
                  expected: "[number, number, number, number]",
                  value: input.ip,
                })) &&
              [
                ("number" === typeof input.ip[0] &&
                  Number.isFinite(input.ip[0])) ||
                  $report(_exceptionable, {
                    path: _path + ".ip[0]",
                    expected: "number",
                    value: input.ip[0],
                  }),
                ("number" === typeof input.ip[1] &&
                  Number.isFinite(input.ip[1])) ||
                  $report(_exceptionable, {
                    path: _path + ".ip[1]",
                    expected: "number",
                    value: input.ip[1],
                  }),
                ("number" === typeof input.ip[2] &&
                  Number.isFinite(input.ip[2])) ||
                  $report(_exceptionable, {
                    path: _path + ".ip[2]",
                    expected: "number",
                    value: input.ip[2],
                  }),
                ("number" === typeof input.ip[3] &&
                  Number.isFinite(input.ip[3])) ||
                  $report(_exceptionable, {
                    path: _path + ".ip[3]",
                    expected: "number",
                    value: input.ip[3],
                  }),
              ].every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip,
              }),
            ((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              })) &&
              $vo2(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              }),
            8 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
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
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.id && Number.isFinite(input.id)) ||
              $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              }),
            "string" === typeof input.code ||
              $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            "string" === typeof input.name ||
              $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("number" === typeof input.sequence &&
              Number.isFinite(input.sequence)) ||
              $report(_exceptionable, {
                path: _path + ".sequence",
                expected: "number",
                value: input.sequence,
              }),
            "boolean" === typeof input.exclusive ||
              $report(_exceptionable, {
                path: _path + ".exclusive",
                expected: "boolean",
                value: input.exclusive,
              }),
            ("number" === typeof input.priority &&
              Number.isFinite(input.priority)) ||
              $report(_exceptionable, {
                path: _path + ".priority",
                expected: "number",
                value: input.priority,
              }),
            ((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              })) &&
              $vo2(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              }),
            7 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
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
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.time && Number.isFinite(input.time)) ||
              $report(_exceptionable, {
                path: _path + ".time",
                expected: "number",
                value: input.time,
              }),
            ("number" === typeof input.zone && Number.isFinite(input.zone)) ||
              $report(_exceptionable, {
                path: _path + ".zone",
                expected: "number",
                value: input.zone,
              }),
            2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["time", "zone"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.id && Number.isFinite(input.id)) ||
              $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              }),
            ((("object" === typeof input.account && null !== input.account) ||
              $report(_exceptionable, {
                path: _path + ".account",
                expected: "ObjectHierarchical.IAccount",
                value: input.account,
              })) &&
              $vo4(
                input.account,
                _path + ".account",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".account",
                expected: "ObjectHierarchical.IAccount",
                value: input.account,
              }),
            null === input.enterprise ||
              ((("object" === typeof input.enterprise &&
                null !== input.enterprise) ||
                $report(_exceptionable, {
                  path: _path + ".enterprise",
                  expected: "(ObjectHierarchical.IEnterprise | null)",
                  value: input.enterprise,
                })) &&
                $vo5(
                  input.enterprise,
                  _path + ".enterprise",
                  true && _exceptionable,
                )) ||
              $report(_exceptionable, {
                path: _path + ".enterprise",
                expected: "(ObjectHierarchical.IEnterprise | null)",
                value: input.enterprise,
              }),
            ((Array.isArray(input.emails) ||
              $report(_exceptionable, {
                path: _path + ".emails",
                expected: "Array<string>",
                value: input.emails,
              })) &&
              input.emails
                .map(
                  (elem: any, _index1: number) =>
                    "string" === typeof elem ||
                    $report(_exceptionable, {
                      path: _path + ".emails[" + _index1 + "]",
                      expected: "string",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".emails",
                expected: "Array<string>",
                value: input.emails,
              }),
            ((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              })) &&
              $vo2(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              }),
            "boolean" === typeof input.authorized ||
              $report(_exceptionable, {
                path: _path + ".authorized",
                expected: "boolean",
                value: input.authorized,
              }),
            6 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
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
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.id && Number.isFinite(input.id)) ||
              $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              }),
            "string" === typeof input.code ||
              $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            ((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              })) &&
              $vo2(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              }),
            3 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    ["id", "code", "created_at"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        const $vo5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.id && Number.isFinite(input.id)) ||
              $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              }),
            ((("object" === typeof input.account && null !== input.account) ||
              $report(_exceptionable, {
                path: _path + ".account",
                expected: "ObjectHierarchical.IAccount",
                value: input.account,
              })) &&
              $vo4(
                input.account,
                _path + ".account",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".account",
                expected: "ObjectHierarchical.IAccount",
                value: input.account,
              }),
            "string" === typeof input.name ||
              $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("number" === typeof input.grade && Number.isFinite(input.grade)) ||
              $report(_exceptionable, {
                path: _path + ".grade",
                expected: "number",
                value: input.grade,
              }),
            ((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              })) &&
              $vo2(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ObjectHierarchical.ITimestamp",
                value: input.created_at,
              }),
            5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    ["id", "account", "name", "grade", "created_at"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectHierarchical.ICustomer",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectHierarchical.ICustomer",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  })(input),
);
