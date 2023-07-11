import fs from "fs";
import typia from "typia";

import { TagFormat } from "../structures/TagFormat";

const content: string = typia.createStringify<TagFormat>().toString();
fs.writeFileSync(__dirname + "/import.out.js", content, "utf8");
