import typia from "typia";

interface IPointer<T> {
  value: T;
}
type IArray<Key extends string> = {
  [P in Key]: string[];
};

typia.http.createQuery<IPointer<number | string>>();
typia.http.createQuery<IPointer<number[] | undefined>>();
typia.http.createQuery<IPointer<number[][]>>();
typia.http.createQuery<IPointer<[string, string]>>();
typia.http.createQuery<IPointer<number | undefined>>();
typia.http.createQuery<IPointer<IPointer<number>>>();
