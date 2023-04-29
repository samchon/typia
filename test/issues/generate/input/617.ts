import typia from "typia";

import { TupleOptional } from "../../../structures/TupleOptional";

type Wrapped = typia.Primitive<TupleOptional>;
typia.createIs<Wrapped>();
