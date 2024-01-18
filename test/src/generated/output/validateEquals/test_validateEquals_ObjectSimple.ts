import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_validateEquals_ObjectSimple = _test_validateEquals(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input) =>
  ((input: any): typia.IValidation<ObjectSimple> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectSimple => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.scale &&
        null !== input.scale &&
        $io1(input.scale, true && _exceptionable) &&
        "object" === typeof input.position &&
        null !== input.position &&
        $io1(input.position, true && _exceptionable) &&
        "object" === typeof input.rotate &&
        null !== input.rotate &&
        $io1(input.rotate, true && _exceptionable) &&
        "object" === typeof input.pivot &&
        null !== input.pivot &&
        $io1(input.pivot, true && _exceptionable) &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["scale", "position", "rotate", "pivot"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y) &&
        "number" === typeof input.z &&
        Number.isFinite(input.z) &&
        (3 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["x", "y", "z"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectSimple => {
        const $join = require("typia/lib/functional/$join").$join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.scale && null !== input.scale) ||
              $report(_exceptionable, {
                path: _path + ".scale",
                expected: "ObjectSimple.IPoint3D",
                value: input.scale,
              })) &&
              $vo1(input.scale, _path + ".scale", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".scale",
                expected: "ObjectSimple.IPoint3D",
                value: input.scale,
              }),
            ((("object" === typeof input.position && null !== input.position) ||
              $report(_exceptionable, {
                path: _path + ".position",
                expected: "ObjectSimple.IPoint3D",
                value: input.position,
              })) &&
              $vo1(
                input.position,
                _path + ".position",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".position",
                expected: "ObjectSimple.IPoint3D",
                value: input.position,
              }),
            ((("object" === typeof input.rotate && null !== input.rotate) ||
              $report(_exceptionable, {
                path: _path + ".rotate",
                expected: "ObjectSimple.IPoint3D",
                value: input.rotate,
              })) &&
              $vo1(input.rotate, _path + ".rotate", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".rotate",
                expected: "ObjectSimple.IPoint3D",
                value: input.rotate,
              }),
            ((("object" === typeof input.pivot && null !== input.pivot) ||
              $report(_exceptionable, {
                path: _path + ".pivot",
                expected: "ObjectSimple.IPoint3D",
                value: input.pivot,
              })) &&
              $vo1(input.pivot, _path + ".pivot", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".pivot",
                expected: "ObjectSimple.IPoint3D",
                value: input.pivot,
              }),
            4 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    ["scale", "position", "rotate", "pivot"].some(
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
        const $vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.x && Number.isFinite(input.x)) ||
              $report(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x,
              }),
            ("number" === typeof input.y && Number.isFinite(input.y)) ||
              $report(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y,
              }),
            ("number" === typeof input.z && Number.isFinite(input.z)) ||
              $report(_exceptionable, {
                path: _path + ".z",
                expected: "number",
                value: input.z,
              }),
            3 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (["x", "y", "z"].some((prop: any) => key === prop))
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
              expected: "ObjectSimple.IBox3D",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectSimple.IBox3D",
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
