import TSON from "../../src";
import { ObjectSimple } from "../structures/ObjectSimple";

const data = ObjectSimple.generate();
data.position.x = "wrong" as any as number;

TSON.assertType(data);
