import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_misc_createValidatePrune_ArrayRecursive =
  _test_misc_validatePrune("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    (input: any): typia.IValidation<ArrayRecursive> => {
      const validate = (input: any): typia.IValidation<ArrayRecursive> => {
        const errors = [] as any[];
        const __is = (input: any): input is ArrayRecursive => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.children) &&
            input.children.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
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
          const $report = (typia.misc.createValidatePrune as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRecursive => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.children) ||
                  $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Array<ArrayRecursive.ICategory>",
                    value: input.children,
                  })) &&
                  input.children
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".children[" + _index1 + "]",
                            expected: "ArrayRecursive.ICategory",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + ".children[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".children[" + _index1 + "]",
                          expected: "ArrayRecursive.ICategory",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".children",
                    expected: "Array<ArrayRecursive.ICategory>",
                    value: input.children,
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
                    expected: "ArrayRecursive.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ArrayRecursive.ITimestamp",
                    value: input.created_at,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.time &&
                  Number.isFinite(input.time)) ||
                  $report(_exceptionable, {
                    path: _path + ".time",
                    expected: "number",
                    value: input.time,
                  }),
                ("number" === typeof input.zone &&
                  Number.isFinite(input.zone)) ||
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
                  expected: "ArrayRecursive.ICategory",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ArrayRecursive.ICategory",
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
      const prune = (input: ArrayRecursive): void => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "number" === typeof input.sequence &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io1(input.created_at);
        const $io1 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $pp0 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po0(elem);
          });
        const $po0 = (input: any): any => {
          if (Array.isArray(input.children)) $pp0(input.children);
          if ("object" === typeof input.created_at && null !== input.created_at)
            $po1(input.created_at);
          for (const key of Object.keys(input)) {
            if (
              "children" === key ||
              "id" === key ||
              "code" === key ||
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
    },
  );
