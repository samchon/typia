"use strict";
'use server';
import { tags } from "typia";
typia.createIs<string & tags.Format<"uuid">>();
