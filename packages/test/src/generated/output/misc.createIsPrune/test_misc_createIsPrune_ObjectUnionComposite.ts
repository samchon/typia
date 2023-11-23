import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_misc_createIsPrune_ObjectUnionComposite = _test_misc_isPrune(
  "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
  (input: any): input is ObjectUnionComposite => {
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
    const prune = (input: ObjectUnionComposite): void => {
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
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $pu0(elem);
        });
      const $pp1 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po0(elem);
        });
      const $pp2 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po4(elem);
        });
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key || "y" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po0(input.p2);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key) continue;
          delete input[key];
        }
      };
      const $po2 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po0(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po0(input.p3);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key || "p3" === key) continue;
          delete input[key];
        }
      };
      const $po3 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po0(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po0(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po0(input.p3);
        if ("object" === typeof input.p4 && null !== input.p4) $po0(input.p4);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key || "p3" === key || "p4" === key)
            continue;
          delete input[key];
        }
      };
      const $po4 = (input: any): any => {
        if (Array.isArray(input.points)) $pp1(input.points);
        for (const key of Object.keys(input)) {
          if ("points" === key) continue;
          delete input[key];
        }
      };
      const $po5 = (input: any): any => {
        if ("object" === typeof input.outer && null !== input.outer)
          $po4(input.outer);
        if (Array.isArray(input.inner)) $pp2(input.inner);
        for (const key of Object.keys(input)) {
          if ("outer" === key || "inner" === key) continue;
          delete input[key];
        }
      };
      const $po6 = (input: any): any => {
        if (Array.isArray(input.outer)) $pp1(input.outer);
        if ("object" === typeof input.inner && null !== input.inner)
          $po0(input.inner);
        for (const key of Object.keys(input)) {
          if ("outer" === key || "inner" === key) continue;
          delete input[key];
        }
      };
      const $po7 = (input: any): any => {
        if ("object" === typeof input.centroid && null !== input.centroid)
          $po0(input.centroid);
        for (const key of Object.keys(input)) {
          if ("centroid" === key || "radius" === key) continue;
          delete input[key];
        }
      };
      const $pu0 = (input: any): any =>
        (() => {
          if (undefined !== input.x) return $po0(input);
          else if (undefined !== input.p4) return $po3(input);
          else if (undefined !== input.points) return $po4(input);
          else if (
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          )
            return $po6(input);
          else if (
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer)
          )
            return $po5(input);
          else if (undefined !== input.centroid) return $po7(input);
          else
            return (() => {
              if (undefined !== input.p3) return $po2(input);
              else return $po1(input);
            })();
        })();
      if (Array.isArray(input)) $pp0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
