import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_misc_isPrune_ObjectUnionExplicitPointer = _test_misc_isPrune(
  "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
  ((input: any): input is ObjectUnionExplicitPointer => {
    const is = (input: any): input is ObjectUnionExplicitPointer => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $iu0(input.value);
      const $io2 = (input: any): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y) &&
        "point" === input.type;
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
        "line" === input.type;
      const $io4 = (input: any): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y);
      const $io5 = (input: any): boolean =>
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
      const $io6 = (input: any): boolean =>
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
      const $io7 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        ) &&
        "polyline" === input.type;
      const $io8 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io9(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io9(elem),
        ) &&
        "polygon" === input.type;
      const $io9 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io10 = (input: any): boolean =>
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
          if ("point" === input.type) return $io2(input);
          else if ("line" === input.type) return $io3(input);
          else if ("triangle" === input.type) return $io5(input);
          else if ("rectangle" === input.type) return $io6(input);
          else if ("polyline" === input.type) return $io7(input);
          else if ("polygon" === input.type) return $io8(input);
          else if ("circle" === input.type) return $io10(input);
          else return false;
        })();
      return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: ObjectUnionExplicitPointer): void => {
      const $io1 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $iu0(input.value);
      const $io2 = (input: any): boolean =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type;
      const $io3 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io4(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io4(input.p2) &&
        "line" === input.type;
      const $io4 = (input: any): boolean =>
        "number" === typeof input.x && "number" === typeof input.y;
      const $io5 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io4(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io4(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io4(input.p3) &&
        "triangle" === input.type;
      const $io6 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io4(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io4(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io4(input.p3) &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        $io4(input.p4) &&
        "rectangle" === input.type;
      const $io7 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        ) &&
        "polyline" === input.type;
      const $io8 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io9(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io9(elem),
        ) &&
        "polygon" === input.type;
      const $io9 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io10 = (input: any): boolean =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io4(input.centroid) &&
        "number" === typeof input.radius &&
        "circle" === input.type;
      const $iu0 = (input: any): any =>
        (() => {
          if ("point" === input.type) return $io2(input);
          else if ("line" === input.type) return $io3(input);
          else if ("triangle" === input.type) return $io5(input);
          else if ("rectangle" === input.type) return $io6(input);
          else if ("polyline" === input.type) return $io7(input);
          else if ("polygon" === input.type) return $io8(input);
          else if ("circle" === input.type) return $io10(input);
          else return false;
        })();
      const $throws = (typia.misc.isPrune as any).throws;
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po1(elem);
        });
      const $pp1 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po4(elem);
        });
      const $pp2 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $po9(elem);
        });
      const $po0 = (input: any): any => {
        if (Array.isArray(input.value)) $pp0(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $pu0(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key || "y" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po3 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po4(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po4(input.p2);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po4 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key || "y" === key) continue;
          delete input[key];
        }
      };
      const $po5 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po4(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po4(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po4(input.p3);
        for (const key of Object.keys(input)) {
          if ("p1" === key || "p2" === key || "p3" === key || "type" === key)
            continue;
          delete input[key];
        }
      };
      const $po6 = (input: any): any => {
        if ("object" === typeof input.p1 && null !== input.p1) $po4(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po4(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po4(input.p3);
        if ("object" === typeof input.p4 && null !== input.p4) $po4(input.p4);
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
      const $po7 = (input: any): any => {
        if (Array.isArray(input.points)) $pp1(input.points);
        for (const key of Object.keys(input)) {
          if ("points" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po8 = (input: any): any => {
        if ("object" === typeof input.outer && null !== input.outer)
          $po9(input.outer);
        if (Array.isArray(input.inner)) $pp2(input.inner);
        for (const key of Object.keys(input)) {
          if ("outer" === key || "inner" === key || "type" === key) continue;
          delete input[key];
        }
      };
      const $po9 = (input: any): any => {
        if (Array.isArray(input.points)) $pp1(input.points);
        for (const key of Object.keys(input)) {
          if ("points" === key) continue;
          delete input[key];
        }
      };
      const $po10 = (input: any): any => {
        if ("object" === typeof input.centroid && null !== input.centroid)
          $po4(input.centroid);
        for (const key of Object.keys(input)) {
          if ("centroid" === key || "radius" === key || "type" === key)
            continue;
          delete input[key];
        }
      };
      const $pu0 = (input: any): any =>
        (() => {
          if ("point" === input.type) return $po2(input);
          else if ("line" === input.type) return $po3(input);
          else if ("triangle" === input.type) return $po5(input);
          else if ("rectangle" === input.type) return $po6(input);
          else if ("polyline" === input.type) return $po7(input);
          else if ("polygon" === input.type) return $po8(input);
          else if ("circle" === input.type) return $po10(input);
          else
            $throws({
              expected:
                '(ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle>)',
              value: input,
            });
        })();
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
