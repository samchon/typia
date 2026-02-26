import typia, { tags } from "typia";

typia.http.createParameter<string & tags.Format<"uuid">>();
typia.http.createParameter<number & tags.Type<"uint32">>();
