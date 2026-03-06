"use strict";

'use server';

import typia, { tags } from "typia";

typia.createIs<string & tags.Format<"uuid">>();
