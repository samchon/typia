import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_misc_assertClone_ObjectUnionExplicit = _test_misc_assertClone(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  ((input: any): typia.Resolved<ObjectUnionExplicit> => {
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
          const $guard = (typia.misc.assertClone as any).guard;
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
    const clone = (
      input: ObjectUnionExplicit,
    ): typia.Resolved<ObjectUnionExplicit> => {
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
      const $throws = (typia.misc.assertClone as any).throws;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $cu0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co2(elem)
            : (elem as any),
        );
      const $cp2 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co7(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
        type: input.type as any,
      });
      const $co1 = (input: any): any => ({
        p1:
          "object" === typeof input.p1 && null !== input.p1
            ? $co2(input.p1)
            : (input.p1 as any),
        p2:
          "object" === typeof input.p2 && null !== input.p2
            ? $co2(input.p2)
            : (input.p2 as any),
        type: input.type as any,
      });
      const $co2 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
      });
      const $co3 = (input: any): any => ({
        p1:
          "object" === typeof input.p1 && null !== input.p1
            ? $co2(input.p1)
            : (input.p1 as any),
        p2:
          "object" === typeof input.p2 && null !== input.p2
            ? $co2(input.p2)
            : (input.p2 as any),
        p3:
          "object" === typeof input.p3 && null !== input.p3
            ? $co2(input.p3)
            : (input.p3 as any),
        type: input.type as any,
      });
      const $co4 = (input: any): any => ({
        p1:
          "object" === typeof input.p1 && null !== input.p1
            ? $co2(input.p1)
            : (input.p1 as any),
        p2:
          "object" === typeof input.p2 && null !== input.p2
            ? $co2(input.p2)
            : (input.p2 as any),
        p3:
          "object" === typeof input.p3 && null !== input.p3
            ? $co2(input.p3)
            : (input.p3 as any),
        p4:
          "object" === typeof input.p4 && null !== input.p4
            ? $co2(input.p4)
            : (input.p4 as any),
        type: input.type as any,
      });
      const $co5 = (input: any): any => ({
        points: Array.isArray(input.points)
          ? $cp1(input.points)
          : (input.points as any),
        type: input.type as any,
      });
      const $co6 = (input: any): any => ({
        outer:
          "object" === typeof input.outer && null !== input.outer
            ? $co7(input.outer)
            : (input.outer as any),
        inner: Array.isArray(input.inner)
          ? $cp2(input.inner)
          : (input.inner as any),
        type: input.type as any,
      });
      const $co7 = (input: any): any => ({
        points: Array.isArray(input.points)
          ? $cp1(input.points)
          : (input.points as any),
      });
      const $co8 = (input: any): any => ({
        centroid:
          "object" === typeof input.centroid && null !== input.centroid
            ? $co2(input.centroid)
            : (input.centroid as any),
        radius: input.radius as any,
        type: input.type as any,
      });
      const $cu0 = (input: any): any =>
        (() => {
          if ("point" === input.type) return $co0(input);
          else if ("line" === input.type) return $co1(input);
          else if ("triangle" === input.type) return $co3(input);
          else if ("rectangle" === input.type) return $co4(input);
          else if ("polyline" === input.type) return $co5(input);
          else if ("polygon" === input.type) return $co6(input);
          else if ("circle" === input.type) return $co8(input);
          else
            $throws({
              expected:
                '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
              value: input,
            });
        })();
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
