import TSON from "../../src";
import { NativeAlias } from "../structures/NativeAlias";

console.log(TSON.createIs<NativeAlias>().toString());
