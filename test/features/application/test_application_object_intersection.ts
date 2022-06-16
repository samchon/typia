import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export function test_application_object_intersection(): void {
    TSON.application<[ObjectIntersection]>();
}
