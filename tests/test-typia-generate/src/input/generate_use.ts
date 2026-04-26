"use strict";

"use server";

import typia, { tags } from "typia";

import { externalValue } from "../shared/external";

typia.createIs<string & tags.Format<"uuid">>();

export const external = externalValue;
