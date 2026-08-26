import typia from "typia";

// An argument that pairs a listable constant with something the operation
// cannot enumerate must be refused whole. Dropping the half it cannot render
// would hand the caller a list that silently disagrees with its own type.
typia.reflect.literals<"a" | number>();
typia.reflect.literals<boolean | number>();
typia.reflect.literals<string | null>();
