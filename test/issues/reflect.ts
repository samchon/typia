import typia from "typia";

import { ObjectSimple } from "../structures/ObjectSimple";

const metadata = typia.reflect.metadata<[ObjectSimple]>();
console.log(JSON.stringify(metadata.toJSON(), null, 2));
