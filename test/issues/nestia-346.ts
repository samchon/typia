import typia from "typia";

import { DefinitionArrayRecursiveOptional } from "../structures/DefinitionArrayRecursiveOptional";

const app = typia.metadata<[DefinitionArrayRecursiveOptional]>();
const json = JSON.stringify(app, null, 4);
console.log(json);
