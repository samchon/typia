import typia from "typia";

import { UltimateUnion } from "../structures/UltimateUnion";

console.log(typia.random<UltimateUnion>().map((app) => app.schemas));
