import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_validate_ToJsonUnion = _test_validate(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)((input) =>
  ((input: any): typia.IValidation<ToJsonUnion> => {
    const errors = [] as any[];
    const __is = (input: any): input is ToJsonUnion => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.mobile &&
        "string" === typeof input.name;
      const $io1 = (input: any): boolean => "function" === typeof input.toJSON;
      const $io2 = (input: any): boolean => "function" === typeof input.toJSON;
      const $io3 = (input: any): boolean => "function" === typeof input.toJSON;
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input.id) return $io0(input);
          else
            return (() => {
              if ($io3(input)) return $io3(input);
              else if ($io2(input)) return $io2(input);
              else if ($io1(input)) return $io1(input);
              else return false;
            })();
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            null !== elem &&
            undefined !== elem &&
            ("string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              ("object" === typeof elem && null !== elem && $iu0(elem))),
        )
      );
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ToJsonUnion => {
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
            "string" === typeof input.mobile ||
              $report(_exceptionable, {
                path: _path + ".mobile",
                expected: "string",
                value: input.mobile,
              }),
            "string" === typeof input.name ||
              $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
          ].every((flag: boolean) => flag);
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "function" === typeof input.toJSON ||
              $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              }),
          ].every((flag: boolean) => flag);
        const $vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "function" === typeof input.toJSON ||
              $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              }),
          ].every((flag: boolean) => flag);
        const $vo3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "function" === typeof input.toJSON ||
              $report(_exceptionable, {
                path: _path + ".toJSON",
                expected: "unknown",
                value: input.toJSON,
              }),
          ].every((flag: boolean) => flag);
        const $vu0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input.id)
              return $vo0(input, _path, true && _exceptionable);
            else
              return (
                $vo3(input, _path, false && _exceptionable) ||
                $vo2(input, _path, false && _exceptionable) ||
                $vo1(input, _path, false && _exceptionable)
              );
          })();
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "ToJsonUnion",
              value: input,
            })) &&
            input
              .map(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                      value: elem,
                    })) &&
                  (undefined !== elem ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                      value: elem,
                    })) &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    ((("object" === typeof elem && null !== elem) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                        value: elem,
                      })) &&
                      $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                    $report(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                      value: elem,
                    })),
              )
              .every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "ToJsonUnion",
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
