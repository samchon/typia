import typia from "../../src";
import { ObjectSimple } from "../structures/ObjectSimple";

const data = ObjectSimple.generate();
data.position.x = "wrong" as any as number;

typia.assert(data);
