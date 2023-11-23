import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_misc_assertPrune_ObjectUnionExplicit = _test_misc_assertPrune(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  ((input: any): ObjectUnionExplicit => {
    const assert = (input: any): ObjectUnionExplicit => {
      const __is = (input: any): input is ObjectUnionExplicit => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y) &&
          "point" === input.type;
        const $io1 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          "number" === typeof (input.p1 as any).x &&
          Number.isFinite((input.p1 as any).x) &&
          "number" === typeof (input.p1 as any).y &&
          Number.isFinite((input.p1 as any).y) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          "number" === typeof (input.p2 as any).x &&
          Number.isFinite((input.p2 as any).x) &&
          "number" === typeof (input.p2 as any).y &&
          Number.isFinite((input.p2 as any).y) &&
          "line" === input.type;
        const $io2 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y);
        const $io3 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          "number" === typeof (input.p1 as any).x &&
          Number.isFinite((input.p1 as any).x) &&
          "number" === typeof (input.p1 as any).y &&
          Number.isFinite((input.p1 as any).y) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          "number" === typeof (input.p2 as any).x &&
          Number.isFinite((input.p2 as any).x) &&
          "number" === typeof (input.p2 as any).y &&
          Number.isFinite((input.p2 as any).y) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          "number" === typeof (input.p3 as any).x &&
          Number.isFinite((input.p3 as any).x) &&
          "number" === typeof (input.p3 as any).y &&
          Number.isFinite((input.p3 as any).y) &&
          "triangle" === input.type;
        const $io4 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          "number" === typeof (input.p1 as any).x &&
          Number.isFinite((input.p1 as any).x) &&
          "number" === typeof (input.p1 as any).y &&
          Number.isFinite((input.p1 as any).y) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          "number" === typeof (input.p2 as any).x &&
          Number.isFinite((input.p2 as any).x) &&
          "number" === typeof (input.p2 as any).y &&
          Number.isFinite((input.p2 as any).y) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          "number" === typeof (input.p3 as any).x &&
          Number.isFinite((input.p3 as any).x) &&
          "number" === typeof (input.p3 as any).y &&
          Number.isFinite((input.p3 as any).y) &&
          "object" === typeof input.p4 &&
          null !== input.p4 &&
          "number" === typeof (input.p4 as any).x &&
          Number.isFinite((input.p4 as any).x) &&
          "number" === typeof (input.p4 as any).y &&
          Number.isFinite((input.p4 as any).y) &&
          "rectangle" === input.type;
        const $io5 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          ) &&
          "polyline" === input.type;
        const $io6 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io7(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io7(elem),
          ) &&
          "polygon" === input.type;
        const $io7 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          );
        const $io8 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          "number" === typeof (input.centroid as any).x &&
          Number.isFinite((input.centroid as any).x) &&
          "number" === typeof (input.centroid as any).y &&
          Number.isFinite((input.centroid as any).y) &&
          "number" === typeof input.radius &&
          Number.isFinite(input.radius) &&
          "circle" === input.type;
        const $iu0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $io0(input);
            else if ("line" === input.type) return $io1(input);
            else if ("triangle" === input.type) return $io3(input);
            else if ("rectangle" === input.type) return $io4(input);
            else if ("polyline" === input.type) return $io5(input);
            else if ("polygon" === input.type) return $io6(input);
            else if ("circle" === input.type) return $io8(input);
            else return false;
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
        ): input is ObjectUnionExplicit => {
          const $guard = (typia.misc.assertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.x && Number.isFinite(input.x)) ||
              $guard(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x,
              })) &&
            (("number" === typeof input.y && Number.isFinite(input.y)) ||
              $guard(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y,
              })) &&
            ("point" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"point"',
                value: input.type,
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.p1 && null !== input.p1) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p1,
              })) &&
              $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p1,
              })) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p2,
              })) &&
              $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p2,
              })) &&
            ("line" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"line"',
                value: input.type,
              }));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.x && Number.isFinite(input.x)) ||
              $guard(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x,
              })) &&
            (("number" === typeof input.y && Number.isFinite(input.y)) ||
              $guard(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y,
              }));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.p1 && null !== input.p1) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p1,
              })) &&
              $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p1,
              })) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p2,
              })) &&
              $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p2,
              })) &&
            (((("object" === typeof input.p3 && null !== input.p3) ||
              $guard(_exceptionable, {
                path: _path + ".p3",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p3,
              })) &&
              $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p3",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p3,
              })) &&
            ("triangle" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"triangle"',
                value: input.type,
              }));
          const $ao4 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.p1 && null !== input.p1) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p1,
              })) &&
              $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p1,
              })) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p2,
              })) &&
              $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p2,
              })) &&
            (((("object" === typeof input.p3 && null !== input.p3) ||
              $guard(_exceptionable, {
                path: _path + ".p3",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p3,
              })) &&
              $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p3",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p3,
              })) &&
            (((("object" === typeof input.p4 && null !== input.p4) ||
              $guard(_exceptionable, {
                path: _path + ".p4",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p4,
              })) &&
              $ao2(input.p4, _path + ".p4", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p4",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.p4,
              })) &&
            ("rectangle" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"rectangle"',
                value: input.type,
              }));
          const $ao5 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.points) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<ObjectUnionExplicit.IPoint>",
                value: input.points,
              })) &&
              input.points.every(
                (elem: any, _index2: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index2 + "]",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: elem,
                    })) &&
                    $ao2(
                      elem,
                      _path + ".points[" + _index2 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".points[" + _index2 + "]",
                    expected: "ObjectUnionExplicit.IPoint",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<ObjectUnionExplicit.IPoint>",
                value: input.points,
              })) &&
            ("polyline" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"polyline"',
                value: input.type,
              }));
          const $ao6 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.outer && null !== input.outer) ||
              $guard(_exceptionable, {
                path: _path + ".outer",
                expected: "ObjectUnionExplicit.IPolyline",
                value: input.outer,
              })) &&
              $ao7(input.outer, _path + ".outer", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".outer",
                expected: "ObjectUnionExplicit.IPolyline",
                value: input.outer,
              })) &&
            (((Array.isArray(input.inner) ||
              $guard(_exceptionable, {
                path: _path + ".inner",
                expected: "Array<ObjectUnionExplicit.IPolyline>",
                value: input.inner,
              })) &&
              input.inner.every(
                (elem: any, _index3: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".inner[" + _index3 + "]",
                      expected: "ObjectUnionExplicit.IPolyline",
                      value: elem,
                    })) &&
                    $ao7(
                      elem,
                      _path + ".inner[" + _index3 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".inner[" + _index3 + "]",
                    expected: "ObjectUnionExplicit.IPolyline",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".inner",
                expected: "Array<ObjectUnionExplicit.IPolyline>",
                value: input.inner,
              })) &&
            ("polygon" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"polygon"',
                value: input.type,
              }));
          const $ao7 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.points) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<ObjectUnionExplicit.IPoint>",
                value: input.points,
              })) &&
              input.points.every(
                (elem: any, _index4: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index4 + "]",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: elem,
                    })) &&
                    $ao2(
                      elem,
                      _path + ".points[" + _index4 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".points[" + _index4 + "]",
                    expected: "ObjectUnionExplicit.IPoint",
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".points",
              expected: "Array<ObjectUnionExplicit.IPoint>",
              value: input.points,
            });
          const $ao8 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.centroid &&
              null !== input.centroid) ||
              $guard(_exceptionable, {
                path: _path + ".centroid",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.centroid,
              })) &&
              $ao2(
                input.centroid,
                _path + ".centroid",
                true && _exceptionable,
              )) ||
              $guard(_exceptionable, {
                path: _path + ".centroid",
                expected: "ObjectUnionExplicit.IPoint",
                value: input.centroid,
              })) &&
            (("number" === typeof input.radius &&
              Number.isFinite(input.radius)) ||
              $guard(_exceptionable, {
                path: _path + ".radius",
                expected: "number",
                value: input.radius,
              })) &&
            ("circle" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"circle"',
                value: input.type,
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
                return $guard(_exceptionable, {
                  path: _path,
                  expected:
                    '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                  value: input,
                });
            })();
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectUnionExplicit",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                      value: elem,
                    })) &&
                    $au0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectUnionExplicit",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ObjectUnionExplicit): void => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type;
      const $io1 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2) &&
        "line" === input.type;
      const $io2 = (input: any): boolean =>
        "number" === typeof input.x && "number" === typeof input.y;
      const $io3 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io2(input.p3) &&
        "triangle" === input.type;
      const $io4 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io2(input.p3) &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        $io2(input.p4) &&
        "rectangle" === input.type;
      const $io5 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        ) &&
        "polyline" === input.type;
      const $io6 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io7(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io7(elem),
        ) &&
        "polygon" === input.type;
      const $io7 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io2(elem),
        );
      const $io8 = (input: any): boolean =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io2(input.centroid) &&
        "number" === typeof input.radius &&
        "circle" === input.type;
      const $throws = (typia.misc.assertPrune as any).throws;
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $pu0(elem);
        });
      const $pp1 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po2(elem);
        });
      const $pp2 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po7(elem);
        });
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key || "y" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po2(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po2(input.p2);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key || "y" === key) continue;
          delete input[key];
        }
      };
      const $po3 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po2(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po2(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po2(input.p3);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key || "p3" === key || "type" === key)
            continue;
          delete input[key];
        }
      };
      const $po4 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po2(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po2(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po2(input.p3);
        if ("object" === typeof input.p4 && null !== input.p4) $po2(input.p4);
        for (const key of Object.keys(input)) {
          if (
            "p1" === key ||
            "p2" === key ||
            "p3" === key ||
            "p4" === key ||
            "type" === key
          )
            continue;
          delete input[key];
        }
      };
      const $po5 = (input: any): any => {
        if (Array.isArray(input.points)) $pp1(input.points);
        for (const key of Object.keys(input)) {
          if ("points" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po6 = (input: any): any => {
        if ("object" === typeof input.outer && null !== input.outer)
          $po7(input.outer);
        if (Array.isArray(input.inner)) $pp2(input.inner);
        for (const key of Object.keys(input)) {
          if ("outer" === key || "inner" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po7 = (input: any): any => {
        if (Array.isArray(input.points)) $pp1(input.points);
        for (const key of Object.keys(input)) {
          if ("points" === key) continue;
          delete input[key];
        }
      };
      const $po8 = (input: any): any => {
        if ("object" === typeof input.centroid && null !== input.centroid)
          $po2(input.centroid);
        for (const key of Object.keys(input)) {
          if ("centroid" === key || "radius" === key || "type" === key)
            continue;
          delete input[key];
        }
      };
      const $pu0 = (input: any): any =>
        (() => {
          if ("point" === input.type) return $po0(input);
          else if ("line" === input.type) return $po1(input);
          else if ("triangle" === input.type) return $po3(input);
          else if ("rectangle" === input.type) return $po4(input);
          else if ("polyline" === input.type) return $po5(input);
          else if ("polygon" === input.type) return $po6(input);
          else if ("circle" === input.type) return $po8(input);
          else
            $throws({
              expected:
                '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
              value: input,
            });
        })();
      if (Array.isArray(input)) $pp0(input);
    };
    assert(input);
    prune(input);
    return input;
  })(input),
);
