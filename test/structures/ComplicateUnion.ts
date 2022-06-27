import { RandomGenerator } from "../internal/RandomGenerator";

export type ComplicateUnion = Array<
    | boolean
    | number
    | string
    | ComplicateUnion.IPoint
    | ComplicateUnion.ILine
    | ComplicateUnion.ITriangle
    | ComplicateUnion.IRectangle
    | ComplicateUnion.IPolyline
    | ComplicateUnion.IPolygon
    | ComplicateUnion.ICircle
    | ComplicateUnion.IPointer<
          | ComplicateUnion.IPoint
          | ComplicateUnion.ILine
          | ComplicateUnion.ITriangle
          | ComplicateUnion.IRectangle
          | ComplicateUnion.IPolyline
          | ComplicateUnion.IPolygon
          | ComplicateUnion.ICircle
      >
    | Array<ComplicateUnion.IPoint>
    | Array<ComplicateUnion.ILine>
    | Array<ComplicateUnion.ITriangle>
    | Array<ComplicateUnion.IRectangle>
    | Array<ComplicateUnion.IPolyline>
    | Array<ComplicateUnion.IPolygon>
    | Array<ComplicateUnion.ICircle>
>;
export namespace ComplicateUnion {
    export interface IPointer<T> {
        value: T;
    }
    export interface IPoint {
        x: number;
        y: number;
    }
    export interface ILine {
        p1: IPoint;
        p2: IPoint;
    }
    export interface ITriangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
    }
    export interface IRectangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        p4: IPoint;
    }
    export interface IPolyline {
        points: IPoint[];
    }
    export interface IPolygon {
        outer: IPolyline;
        inner: IPolyline[];
    }
    export interface ICircle {
        centroid: IPoint;
        radius: number;
    }

    export function generate(): ComplicateUnion {
        return [
            RandomGenerator.boolean(),
            RandomGenerator.number(),
            RandomGenerator.string(),
            point(),
            line(),
            triangle(),
            rectangle(),
            polyline(),
            polygon(),
            circle(),
            { value: point() },
            { value: line() },
            { value: triangle() },
            { value: rectangle() },
            { value: polyline() },
            { value: polygon() },
            { value: circle() },
            RandomGenerator.array(point),
            RandomGenerator.array(line),
            RandomGenerator.array(triangle),
            RandomGenerator.array(rectangle),
            RandomGenerator.array(polyline),
            RandomGenerator.array(polygon),
            RandomGenerator.array(circle),
        ];
    }

    function point(): IPoint {
        return {
            x: RandomGenerator.number(),
            y: RandomGenerator.number(),
        };
    }
    function line(): ILine {
        return {
            p1: point(),
            p2: point(),
        };
    }
    function triangle(): ITriangle {
        return {
            p1: point(),
            p2: point(),
            p3: point(),
        };
    }
    function rectangle(): IRectangle {
        return {
            p1: point(),
            p2: point(),
            p3: point(),
            p4: point(),
        };
    }
    function polyline(): IPolyline {
        return {
            points: RandomGenerator.array(() => point(), 10),
        };
    }
    function polygon(): IPolygon {
        return {
            outer: polyline(),
            inner: RandomGenerator.array(() => polyline(), 10),
        };
    }
    function circle(): ICircle {
        return {
            centroid: point(),
            radius: RandomGenerator.number(),
        };
    }
}
