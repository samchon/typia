"use strict";

"use server";

// Verifies that the generate CLI preserves unrecognized directive prologues
// ("use server") and handles a typia call in a file that begins with
// directive string-expression statements.
//
// 1. Source file opens with "use strict" and "use server" directives.
// 2. `typia generate` processes the file and emits the output.
// 3. Assert the generated output compiles cleanly under ttsc, confirming
//    directives do not break the generate pipeline.
import typia, { tags } from "typia";

export const createIs = typia.createIs<string & tags.Format<"uuid">>();
