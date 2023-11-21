import typia from "typia";

type AtomicTuple = [number, ...string[]];
interface ObjectTuple {
  tuple: [number, ...string[]];
}

console.log(
  typia.createIs<AtomicTuple>().toString(),
  typia.createIs<ObjectTuple>().toString(),
);
