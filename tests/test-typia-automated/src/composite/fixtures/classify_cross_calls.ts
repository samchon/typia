import typia from "typia";

import type Memo from "./classify_model";
import type { Factory, Model } from "./classify_model";

export const classifyModel = typia.plain.createClassify<Model>();
export const classifyFactory = typia.plain.createClassify<typeof Factory>();
export const classifyMemo = typia.plain.createClassify<Memo>();
