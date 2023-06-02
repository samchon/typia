import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_createStringify_ObjectUnionExplicit = _test_stringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input: ObjectUnionExplicit): string => {
        const $io0: any = (input: any): boolean =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1: any = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2: any = (input: any): boolean =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3: any = (input: any): boolean =>
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
        const $io4: any = (input: any): boolean =>
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
        const $io5: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7: any = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8: any = (input: any): boolean =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $number: any = (typia.createStringify as any).number;
        const $string: any = (typia.createStringify as any).string;
        const $throws: any = (typia.createStringify as any).throws;
        const $so0: any = (input: any): any =>
            `{"x":${$number(input.x)},"y":${$number(input.y)},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"point"',
                    value: input.type,
                });
            })()}}`;
        const $so1: any = (input: any): any =>
            `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(
                input.p1.y,
            )}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(
                input.p2.y,
            )}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"line"',
                    value: input.type,
                });
            })()}}`;
        const $so3: any = (input: any): any =>
            `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(
                input.p1.y,
            )}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(
                input.p2.y,
            )}}`},"p3":${`{"x":${$number(input.p3.x)},"y":${$number(
                input.p3.y,
            )}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"triangle"',
                    value: input.type,
                });
            })()}}`;
        const $so4: any = (input: any): any =>
            `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(
                input.p1.y,
            )}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(
                input.p2.y,
            )}}`},"p3":${`{"x":${$number(input.p3.x)},"y":${$number(
                input.p3.y,
            )}}`},"p4":${`{"x":${$number(input.p4.x)},"y":${$number(
                input.p4.y,
            )}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"rectangle"',
                    value: input.type,
                });
            })()}}`;
        const $so5: any = (input: any): any =>
            `{"points":${(() =>
                `[${input.points
                    .map(
                        (elem: any) =>
                            `{"x":${$number(elem.x)},"y":${$number(elem.y)}}`,
                    )
                    .join(",")}]`)()},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polyline"',
                    value: input.type,
                });
            })()}}`;
        const $so6: any = (input: any): any =>
            `{"outer":${$so7(input.outer)},"inner":${(() =>
                `[${input.inner
                    .map((elem: any) => $so7(elem))
                    .join(",")}]`)()},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polygon"',
                    value: input.type,
                });
            })()}}`;
        const $so7: any = (input: any): any =>
            `{"points":${(() =>
                `[${input.points
                    .map(
                        (elem: any) =>
                            `{"x":${$number(elem.x)},"y":${$number(elem.y)}}`,
                    )
                    .join(",")}]`)()}}`;
        const $so8: any = (input: any): any =>
            `{"centroid":${`{"x":${$number(input.centroid.x)},"y":${$number(
                input.centroid.y,
            )}}`},"radius":${$number(input.radius)},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"circle"',
                    value: input.type,
                });
            })()}}`;
        const $su0: any = (input: any): any =>
            (() => {
                if ("point" === input.type) return $so0(input);
                if ("line" === input.type) return $so1(input);
                if ("triangle" === input.type) return $so3(input);
                if ("rectangle" === input.type) return $so4(input);
                if ("polyline" === input.type) return $so5(input);
                if ("polygon" === input.type) return $so6(input);
                if ("circle" === input.type) return $so8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return (() => `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
    },
);
