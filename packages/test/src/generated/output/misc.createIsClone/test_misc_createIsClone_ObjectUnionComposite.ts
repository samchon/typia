import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_misc_createIsClone_ObjectUnionComposite = _test_misc_isClone(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
  (input: any): typia.Resolved<ObjectUnionComposite> | null => {
    const is = (input: any): input is ObjectUnionComposite => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y);
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
        Number.isFinite((input.p2 as any).y);
      const $io2 = (input: any): boolean =>
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
        Number.isFinite((input.p3 as any).y);
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
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        "number" === typeof (input.p4 as any).x &&
        Number.isFinite((input.p4 as any).x) &&
        "number" === typeof (input.p4 as any).y &&
        Number.isFinite((input.p4 as any).y);
      const $io4 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        );
      const $io5 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io4(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io6 = (input: any): boolean =>
        Array.isArray(input.outer) &&
        input.outer.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "object" === typeof input.inner &&
        null !== input.inner &&
        "number" === typeof (input.inner as any).x &&
        Number.isFinite((input.inner as any).x) &&
        "number" === typeof (input.inner as any).y &&
        Number.isFinite((input.inner as any).y);
      const $io7 = (input: any): boolean =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        "number" === typeof (input.centroid as any).x &&
        Number.isFinite((input.centroid as any).x) &&
        "number" === typeof (input.centroid as any).y &&
        Number.isFinite((input.centroid as any).y) &&
        "number" === typeof input.radius &&
        Number.isFinite(input.radius);
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input.x) return $io0(input);
          else if (undefined !== input.p4) return $io3(input);
          else if (undefined !== input.points) return $io4(input);
          else if (
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          )
            return $io6(input);
          else if (
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer)
          )
            return $io5(input);
          else if (undefined !== input.centroid) return $io7(input);
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
    const clone = (
      input: ObjectUnionComposite,
    ): typia.Resolved<ObjectUnionComposite> => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x && "number" === typeof input.y;
      const $io1 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2);
      const $io2 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3);
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
        $io0(input.p4);
      const $io4 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        );
      const $io5 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io4(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io6 = (input: any): boolean =>
        Array.isArray(input.outer) &&
        input.outer.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "object" === typeof input.inner &&
        null !== input.inner &&
        $io0(input.inner);
      const $io7 = (input: any): boolean =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io0(input.centroid) &&
        "number" === typeof input.radius;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $cu0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $cp2 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co4(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
      });
      const $co1 = (input: any): any => ({
        p1:
          "object" === typeof input.p1 && null !== input.p1
            ? $co0(input.p1)
            : (input.p1 as any),
        p2:
          "object" === typeof input.p2 && null !== input.p2
            ? $co0(input.p2)
            : (input.p2 as any),
      });
      const $co2 = (input: any): any => ({
        p1:
          "object" === typeof input.p1 && null !== input.p1
            ? $co0(input.p1)
            : (input.p1 as any),
        p2:
          "object" === typeof input.p2 && null !== input.p2
            ? $co0(input.p2)
            : (input.p2 as any),
        p3:
          "object" === typeof input.p3 && null !== input.p3
            ? $co0(input.p3)
            : (input.p3 as any),
      });
      const $co3 = (input: any): any => ({
        p1:
          "object" === typeof input.p1 && null !== input.p1
            ? $co0(input.p1)
            : (input.p1 as any),
        p2:
          "object" === typeof input.p2 && null !== input.p2
            ? $co0(input.p2)
            : (input.p2 as any),
        p3:
          "object" === typeof input.p3 && null !== input.p3
            ? $co0(input.p3)
            : (input.p3 as any),
        p4:
          "object" === typeof input.p4 && null !== input.p4
            ? $co0(input.p4)
            : (input.p4 as any),
      });
      const $co4 = (input: any): any => ({
        points: Array.isArray(input.points)
          ? $cp1(input.points)
          : (input.points as any),
      });
      const $co5 = (input: any): any => ({
        outer:
          "object" === typeof input.outer && null !== input.outer
            ? $co4(input.outer)
            : (input.outer as any),
        inner: Array.isArray(input.inner)
          ? $cp2(input.inner)
          : (input.inner as any),
      });
      const $co6 = (input: any): any => ({
        outer: Array.isArray(input.outer)
          ? $cp1(input.outer)
          : (input.outer as any),
        inner:
          "object" === typeof input.inner && null !== input.inner
            ? $co0(input.inner)
            : (input.inner as any),
      });
      const $co7 = (input: any): any => ({
        centroid:
          "object" === typeof input.centroid && null !== input.centroid
            ? $co0(input.centroid)
            : (input.centroid as any),
        radius: input.radius as any,
      });
      const $cu0 = (input: any): any =>
        (() => {
          if (undefined !== input.x) return $co0(input);
          else if (undefined !== input.p4) return $co3(input);
          else if (undefined !== input.points) return $co4(input);
          else if (
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          )
            return $co6(input);
          else if (
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer)
          )
            return $co5(input);
          else if (undefined !== input.centroid) return $co7(input);
          else
            return (() => {
              if (undefined !== input.p3) return $co2(input);
              else return $co1(input);
            })();
        })();
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
