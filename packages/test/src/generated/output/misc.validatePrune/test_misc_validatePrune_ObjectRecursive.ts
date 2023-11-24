import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_misc_validatePrune_ObjectRecursive = _test_misc_validatePrune(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  ((input: any): typia.IValidation<ObjectRecursive> => {
    const validate = (input: any): typia.IValidation<ObjectRecursive> => {
      const errors = [] as any[];
      const __is = (input: any): input is ObjectRecursive => {
        const $io0 = (input: any): boolean =>
          (null === input.parent ||
            ("object" === typeof input.parent &&
              null !== input.parent &&
              $io0(input.parent))) &&
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.code &&
          "string" === typeof input.name &&
          "number" === typeof input.sequence &&
          Number.isFinite(input.sequence) &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          "number" === typeof (input.created_at as any).time &&
          Number.isFinite((input.created_at as any).time) &&
          "number" === typeof (input.created_at as any).zone &&
          Number.isFinite((input.created_at as any).zone);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input)) {
        const $report = (typia.misc.validatePrune as any).report(errors);
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectRecursive => {
          const $vo0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            [
              null === input.parent ||
                ((("object" === typeof input.parent && null !== input.parent) ||
                  $report(_exceptionable, {
                    path: _path + ".parent",
                    expected: "(ObjectRecursive.IDepartment | null)",
                    value: input.parent,
                  })) &&
                  $vo0(
                    input.parent,
                    _path + ".parent",
                    true && _exceptionable,
                  )) ||
                $report(_exceptionable, {
                  path: _path + ".parent",
                  expected: "(ObjectRecursive.IDepartment | null)",
                  value: input.parent,
                }),
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
              ((("object" === typeof input.created_at &&
                null !== input.created_at) ||
                $report(_exceptionable, {
                  path: _path + ".created_at",
                  expected: "ObjectRecursive.ITimestamp",
                  value: input.created_at,
                })) &&
                $vo1(
                  input.created_at,
                  _path + ".created_at",
                  true && _exceptionable,
                )) ||
                $report(_exceptionable, {
                  path: _path + ".created_at",
                  expected: "ObjectRecursive.ITimestamp",
                  value: input.created_at,
                }),
            ].every((flag: boolean) => flag);
          const $vo1 = (
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
            ].every((flag: boolean) => flag);
          return (
            ((("object" === typeof input && null !== input) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectRecursive.IDepartment",
                value: input,
              })) &&
              $vo0(input, _path + "", true)) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectRecursive.IDepartment",
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
    };
    const prune = (input: ObjectRecursive): void => {
      const $io0 = (input: any): boolean =>
        (null === input.parent ||
          ("object" === typeof input.parent &&
            null !== input.parent &&
            $io0(input.parent))) &&
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        "string" === typeof input.name &&
        "number" === typeof input.sequence &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io1(input.created_at);
      const $io1 = (input: any): boolean =>
        "number" === typeof input.time && "number" === typeof input.zone;
      const $po0 = (input: any): any => {
        if ("object" === typeof input.parent && null !== input.parent)
          $po0(input.parent);
        if ("object" === typeof input.created_at && null !== input.created_at)
          $po1(input.created_at);
        for (const key of Object.keys(input)) {
          if (
            "parent" === key ||
            "id" === key ||
            "code" === key ||
            "name" === key ||
            "sequence" === key ||
            "created_at" === key
          )
            continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("time" === key || "zone" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
  })(input),
);
