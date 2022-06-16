import TSON from "../../../src";
import { IObjectIntersection } from "../../structures/IObjectIntersection";

export function test_application_object_intersection(): void {
    TSON.application<[IObjectIntersection]>();
}
