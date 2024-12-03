import typia from "typia";

import { ObjectIntersection } from "../structures/ObjectIntersection";
import { ObjectPartialAndRequired } from "../structures/ObjectPartialAndRequired";

typia.protobuf.createEncode<ObjectIntersection>();
typia.protobuf.createEncode<ObjectPartialAndRequired>();
