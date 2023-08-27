import typia from "typia";

import { TypeTagCustom } from "../structures/TypeTagCustom";

const data = typia.random<TypeTagCustom>(TypeTagCustom.RANDOM);
console.log(data);
