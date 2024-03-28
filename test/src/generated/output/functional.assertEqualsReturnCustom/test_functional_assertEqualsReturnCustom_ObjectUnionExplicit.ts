import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_functional_assertEqualsReturnCustom_ObjectUnionExplicit =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )(
    (p: (input: ObjectUnionExplicit) => ObjectUnionExplicit) =>
      (input: ObjectUnionExplicit): ObjectUnionExplicit => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectUnionExplicit => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectUnionExplicit => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              "point" === input.type &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["x", "y", "type"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "line" === input.type &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["p1", "p2", "type"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["x", "y"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              $io2(input.p3, true && _exceptionable) &&
              "triangle" === input.type &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["p1", "p2", "p3", "type"].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io4 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              $io2(input.p3, true && _exceptionable) &&
              "object" === typeof input.p4 &&
              null !== input.p4 &&
              $io2(input.p4, true && _exceptionable) &&
              "rectangle" === input.type &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["p1", "p2", "p3", "p4", "type"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io5 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.points) &&
              input.points.every(
                (elem: any, _index2: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              "polyline" === input.type &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["points", "type"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io6 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io7(input.outer, true && _exceptionable) &&
              Array.isArray(input.inner) &&
              input.inner.every(
                (elem: any, _index3: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io7(elem, true && _exceptionable),
              ) &&
              "polygon" === input.type &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["outer", "inner", "type"].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io7 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.points) &&
              input.points.every(
                (elem: any, _index4: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["points"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io8 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.centroid &&
              null !== input.centroid &&
              $io2(input.centroid, true && _exceptionable) &&
              "number" === typeof input.radius &&
              Number.isFinite(input.radius) &&
              "circle" === input.type &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["centroid", "radius", "type"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
              (() => {
                if ("point" === input.type)
                  return $io0(input, true && _exceptionable);
                else if ("line" === input.type)
                  return $io1(input, true && _exceptionable);
                else if ("triangle" === input.type)
                  return $io3(input, true && _exceptionable);
                else if ("rectangle" === input.type)
                  return $io4(input, true && _exceptionable);
                else if ("polyline" === input.type)
                  return $io5(input, true && _exceptionable);
                else if ("polygon" === input.type)
                  return $io6(input, true && _exceptionable);
                else if ("circle" === input.type)
                  return $io8(input, true && _exceptionable);
                else return false;
              })();
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $iu0(elem, true),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectUnionExplicit => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".x",
                      expected: "number",
                      value: input.x,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".y",
                      expected: "number",
                      value: input.y,
                    },
                    errorFactory,
                  )) &&
                ("point" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"point"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["x", "y", "type"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.p1 && null !== input.p1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p2 && null !== input.p2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                ("line" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"line"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["p1", "p2", "type"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".x",
                      expected: "number",
                      value: input.x,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".y",
                      expected: "number",
                      value: input.y,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["x", "y"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.p1 && null !== input.p1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p2 && null !== input.p2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p3 && null !== input.p3) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                ("triangle" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"triangle"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["p1", "p2", "p3", "type"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.p1 && null !== input.p1) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p2 && null !== input.p2) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p3 && null !== input.p3) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.p4 && null !== input.p4) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p4",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p4,
                    },
                    errorFactory,
                  )) &&
                  $ao2(input.p4, _path + ".p4", true && _exceptionable)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".p4",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p4,
                    },
                    errorFactory,
                  )) &&
                ("rectangle" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"rectangle"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["p1", "p2", "p3", "p4", "type"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.points) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    },
                    errorFactory,
                  )) &&
                  input.points.every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".points[" + _index2 + "]",
                            expected: "ObjectUnionExplicit.IPoint",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao2(
                          elem,
                          _path + ".points[" + _index2 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".points[" + _index2 + "]",
                          expected: "ObjectUnionExplicit.IPoint",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    },
                    errorFactory,
                  )) &&
                ("polyline" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"polyline"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["points", "type"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.outer && null !== input.outer) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer",
                      expected: "ObjectUnionExplicit.IPolyline",
                      value: input.outer,
                    },
                    errorFactory,
                  )) &&
                  $ao7(
                    input.outer,
                    _path + ".outer",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer",
                      expected: "ObjectUnionExplicit.IPolyline",
                      value: input.outer,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.inner) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner",
                      expected: "Array<ObjectUnionExplicit.IPolyline>",
                      value: input.inner,
                    },
                    errorFactory,
                  )) &&
                  input.inner.every(
                    (elem: any, _index3: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".inner[" + _index3 + "]",
                            expected: "ObjectUnionExplicit.IPolyline",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao7(
                          elem,
                          _path + ".inner[" + _index3 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".inner[" + _index3 + "]",
                          expected: "ObjectUnionExplicit.IPolyline",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner",
                      expected: "Array<ObjectUnionExplicit.IPolyline>",
                      value: input.inner,
                    },
                    errorFactory,
                  )) &&
                ("polygon" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"polygon"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["outer", "inner", "type"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao7 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.points) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    },
                    errorFactory,
                  )) &&
                  input.points.every(
                    (elem: any, _index4: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".points[" + _index4 + "]",
                            expected: "ObjectUnionExplicit.IPoint",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao2(
                          elem,
                          _path + ".points[" + _index4 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".points[" + _index4 + "]",
                          expected: "ObjectUnionExplicit.IPoint",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["points"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao8 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.centroid &&
                  null !== input.centroid) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".centroid",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.centroid,
                    },
                    errorFactory,
                  )) &&
                  $ao2(
                    input.centroid,
                    _path + ".centroid",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".centroid",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.centroid,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.radius &&
                  Number.isFinite(input.radius)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".radius",
                      expected: "number",
                      value: input.radius,
                    },
                    errorFactory,
                  )) &&
                ("circle" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"circle"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["centroid", "radius", "type"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if ("point" === input.type)
                    return $ao0(input, _path, true && _exceptionable);
                  else if ("line" === input.type)
                    return $ao1(input, _path, true && _exceptionable);
                  else if ("triangle" === input.type)
                    return $ao3(input, _path, true && _exceptionable);
                  else if ("rectangle" === input.type)
                    return $ao4(input, _path, true && _exceptionable);
                  else if ("polyline" === input.type)
                    return $ao5(input, _path, true && _exceptionable);
                  else if ("polygon" === input.type)
                    return $ao6(input, _path, true && _exceptionable);
                  else if ("circle" === input.type)
                    return $ao8(input, _path, true && _exceptionable);
                  else
                    return $guard(
                      _exceptionable,
                      {
                        path: _path,
                        expected:
                          '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                      },
                      errorFactory,
                    );
                })();
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectUnionExplicit",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $au0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectUnionExplicit",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
