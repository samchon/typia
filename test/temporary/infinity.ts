import TSON from "../../src";
import { ObjectSimple } from "../structures/ObjectSimple";

const data = ObjectSimple.generate();
data.scale.x = Infinity;
data.scale.y = -Infinity;
console.log(TSON.stringify(data));
