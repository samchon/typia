import typia from "typia";

import type Stamp from "./classify_defmodel";
import type Note from "./classify_fcmodel";
import type { NS } from "./classify_nsmodel";

export const makePoint = typia.plain.createClassify<typeof NS.Point>();
export const makeModel = typia.plain.createClassify<NS.Model>();
export const makeStamp = typia.plain.createClassify<typeof Stamp>();
export const makeNote = typia.plain.createClassify<Note>();
