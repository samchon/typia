import typia from "typia";

interface IPointer<T> {
  value: T;
}

// Error: top level must be single object (union of objects)
typia.http.createFormData<IPointer<string> | IPointer<number>>();

// Error: union type is not allowed in array
typia.http.createFormData<{
  values: (string | number)[];
}>();

// Error: only atomic, constant or blob types are allowed in array
typia.http.createFormData<{
  values: { nested: string }[];
}>();

// Error: dynamic property is not allowed
typia.http.createFormData<{
  [key: string]: string;
}>();

// Error: tuple type is not allowed
typia.http.createFormData<{
  value: [string, number];
}>();

// Error: union type is not allowed in property
typia.http.createFormData<{
  value: string | number;
}>();

// Error: nested object type is not allowed
typia.http.createFormData<{
  nested: {
    value: string;
  };
}>();

// Error: Set type is not allowed
typia.http.createFormData<{
  values: Set<string>;
}>();

// Error: Map type is not allowed
typia.http.createFormData<{
  values: Map<string, string>;
}>();
