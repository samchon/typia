import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_createRandom_ObjectUnionImplicit = _test_random(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectUnionImplicit as any)
      .RANDOM,
  ): typia.Resolved<ObjectUnionImplicit> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      x:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      y:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      slope: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      p1: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      p2: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      width: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      distance: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    const $ro2 = (_recursive: boolean = false, _depth: number = 0): any => ({
      p1: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      p2: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      p3: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      width: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      height: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      area: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
      p1: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      p2: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      p3: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      p4: $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      width: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      height: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      area: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    const $ro4 = (_recursive: boolean = false, _depth: number = 0): any => ({
      points: (generator?.array ?? $generator.array)(() =>
        $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      ),
      length: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    const $ro5 = (_recursive: boolean = false, _depth: number = 0): any => ({
      outer: $ro4(_recursive, _recursive ? 1 + _depth : _depth),
      inner: $pick([
        () => undefined,
        () =>
          (generator?.array ?? $generator.array)(() =>
            $ro4(_recursive, _recursive ? 1 + _depth : _depth),
          ),
      ])(),
      area: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    const $ro6 = (_recursive: boolean = false, _depth: number = 0): any => ({
      radius:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
      centroid: $pick([
        () => undefined,
        () => $ro0(_recursive, _recursive ? 1 + _depth : _depth),
      ])(),
      area: $pick([
        () => undefined,
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
    });
    return (generator?.array ?? $generator.array)(() =>
      $pick([
        () => $ro0(),
        () => $ro1(),
        () => $ro2(),
        () => $ro3(),
        () => $ro4(),
        () => $ro5(),
        () => $ro6(),
      ])(),
    );
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectUnionImplicit => {
    const __is = (input: any): input is ObjectUnionImplicit => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y) &&
        (null === input.slope ||
          undefined === input.slope ||
          ("number" === typeof input.slope && Number.isFinite(input.slope)));
      const $io1 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        (null === input.width ||
          undefined === input.width ||
          ("number" === typeof input.width && Number.isFinite(input.width))) &&
        (null === input.distance ||
          undefined === input.distance ||
          ("number" === typeof input.distance &&
            Number.isFinite(input.distance)));
      const $io2 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3) &&
        (null === input.width ||
          undefined === input.width ||
          ("number" === typeof input.width && Number.isFinite(input.width))) &&
        (null === input.height ||
          undefined === input.height ||
          ("number" === typeof input.height &&
            Number.isFinite(input.height))) &&
        (null === input.area ||
          undefined === input.area ||
          ("number" === typeof input.area && Number.isFinite(input.area)));
      const $io3 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3) &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        $io0(input.p4) &&
        (null === input.width ||
          undefined === input.width ||
          ("number" === typeof input.width && Number.isFinite(input.width))) &&
        (null === input.height ||
          undefined === input.height ||
          ("number" === typeof input.height &&
            Number.isFinite(input.height))) &&
        (null === input.area ||
          undefined === input.area ||
          ("number" === typeof input.area && Number.isFinite(input.area)));
      const $io4 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        (null === input.length ||
          undefined === input.length ||
          ("number" === typeof input.length && Number.isFinite(input.length)));
      const $io5 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io4(input.outer) &&
        (undefined === input.inner ||
          (Array.isArray(input.inner) &&
            input.inner.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io4(elem),
            ))) &&
        (null === input.area ||
          undefined === input.area ||
          ("number" === typeof input.area && Number.isFinite(input.area)));
      const $io6 = (input: any): boolean =>
        "number" === typeof input.radius &&
        Number.isFinite(input.radius) &&
        (undefined === input.centroid ||
          ("object" === typeof input.centroid &&
            null !== input.centroid &&
            $io0(input.centroid))) &&
        (null === input.area ||
          undefined === input.area ||
          ("number" === typeof input.area && Number.isFinite(input.area)));
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input.x) return $io0(input);
          else if (undefined !== input.p4) return $io3(input);
          else if (undefined !== input.points) return $io4(input);
          else if (undefined !== input.outer) return $io5(input);
          else if (undefined !== input.radius) return $io6(input);
          else
            return (() => {
              if (undefined !== input.p3) return $io2(input);
              else return $io1(input);
            })();
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectUnionImplicit => {
        const $guard = (typia.createAssert as any).guard;
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
          (null === input.slope ||
            undefined === input.slope ||
            ("number" === typeof input.slope && Number.isFinite(input.slope)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".slope",
                expected: "(null | number | undefined)",
                value: input.slope,
              },
              errorFactory,
            ));
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
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          (null === input.width ||
            undefined === input.width ||
            ("number" === typeof input.width && Number.isFinite(input.width)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".width",
                expected: "(null | number | undefined)",
                value: input.width,
              },
              errorFactory,
            )) &&
          (null === input.distance ||
            undefined === input.distance ||
            ("number" === typeof input.distance &&
              Number.isFinite(input.distance)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".distance",
                expected: "(null | number | undefined)",
                value: input.distance,
              },
              errorFactory,
            ));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.p1 && null !== input.p1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p3 && null !== input.p3) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
            $ao0(input.p3, _path + ".p3", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
          (null === input.width ||
            undefined === input.width ||
            ("number" === typeof input.width && Number.isFinite(input.width)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".width",
                expected: "(null | number | undefined)",
                value: input.width,
              },
              errorFactory,
            )) &&
          (null === input.height ||
            undefined === input.height ||
            ("number" === typeof input.height &&
              Number.isFinite(input.height)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".height",
                expected: "(null | number | undefined)",
                value: input.height,
              },
              errorFactory,
            )) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".area",
                expected: "(null | number | undefined)",
                value: input.area,
              },
              errorFactory,
            ));
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
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p3 && null !== input.p3) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
            $ao0(input.p3, _path + ".p3", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p4 && null !== input.p4) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p4",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p4,
              },
              errorFactory,
            )) &&
            $ao0(input.p4, _path + ".p4", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p4",
                expected: "ObjectUnionImplicit.IPoint",
                value: input.p4,
              },
              errorFactory,
            )) &&
          (null === input.width ||
            undefined === input.width ||
            ("number" === typeof input.width && Number.isFinite(input.width)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".width",
                expected: "(null | number | undefined)",
                value: input.width,
              },
              errorFactory,
            )) &&
          (null === input.height ||
            undefined === input.height ||
            ("number" === typeof input.height &&
              Number.isFinite(input.height)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".height",
                expected: "(null | number | undefined)",
                value: input.height,
              },
              errorFactory,
            )) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".area",
                expected: "(null | number | undefined)",
                value: input.area,
              },
              errorFactory,
            ));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.points) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<ObjectUnionImplicit.IPoint>",
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
                      expected: "ObjectUnionImplicit.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(
                    elem,
                    _path + ".points[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".points[" + _index2 + "]",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<ObjectUnionImplicit.IPoint>",
                value: input.points,
              },
              errorFactory,
            )) &&
          (null === input.length ||
            undefined === input.length ||
            ("number" === typeof input.length &&
              Number.isFinite(input.length)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".length",
                expected: "(null | number | undefined)",
                value: input.length,
              },
              errorFactory,
            ));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.outer && null !== input.outer) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".outer",
                expected: "ObjectUnionImplicit.IPolyline",
                value: input.outer,
              },
              errorFactory,
            )) &&
            $ao4(input.outer, _path + ".outer", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".outer",
                expected: "ObjectUnionImplicit.IPolyline",
                value: input.outer,
              },
              errorFactory,
            )) &&
          (undefined === input.inner ||
            ((Array.isArray(input.inner) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".inner",
                  expected:
                    "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
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
                        expected: "ObjectUnionImplicit.IPolyline",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao4(
                      elem,
                      _path + ".inner[" + _index3 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner[" + _index3 + "]",
                      expected: "ObjectUnionImplicit.IPolyline",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".inner",
                expected: "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                value: input.inner,
              },
              errorFactory,
            )) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".area",
                expected: "(null | number | undefined)",
                value: input.area,
              },
              errorFactory,
            ));
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          (undefined === input.centroid ||
            ((("object" === typeof input.centroid && null !== input.centroid) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".centroid",
                  expected: "(ObjectUnionImplicit.IPoint | undefined)",
                  value: input.centroid,
                },
                errorFactory,
              )) &&
              $ao0(
                input.centroid,
                _path + ".centroid",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".centroid",
                expected: "(ObjectUnionImplicit.IPoint | undefined)",
                value: input.centroid,
              },
              errorFactory,
            )) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".area",
                expected: "(null | number | undefined)",
                value: input.area,
              },
              errorFactory,
            ));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input.x)
              return $ao0(input, _path, true && _exceptionable);
            else if (undefined !== input.p4)
              return $ao3(input, _path, true && _exceptionable);
            else if (undefined !== input.points)
              return $ao4(input, _path, true && _exceptionable);
            else if (undefined !== input.outer)
              return $ao5(input, _path, true && _exceptionable);
            else if (undefined !== input.radius)
              return $ao6(input, _path, true && _exceptionable);
            else
              return (() => {
                if (undefined !== input.p3)
                  return $ao2(input, _path, true && _exceptionable);
                else return $ao1(input, _path, true && _exceptionable);
              })();
          })();
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectUnionImplicit",
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
                        "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
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
                      "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectUnionImplicit",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
