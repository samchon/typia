import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

interface A {
    a: string;
}
interface B {
    b: string;
}
type Union = A | B;

export const checkUnion = typia.createIs<Union>();
export const checkPrimitive = typia.createIs<ObjectPrimitive>();
