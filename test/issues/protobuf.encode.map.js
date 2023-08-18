//-------------------------------------------------
// TYPIA
//-------------------------------------------------
// syntax = "proto3";
// 
// message ArrayHierarchicalPointer {
//     repeated ArrayHierarchicalPointer.ICompany value = 1;
//     message ICompany {
//         required double id = 1;
//         required double serial = 2;
//         required string name = 3;
//         required ArrayHierarchicalPointer.ITimestamp established_at = 4;
//         repeated ArrayHierarchicalPointer.IDepartment departments = 5;
//     }
// 
//     message ITimestamp {
//         required double time = 1;
//         required double zone = 2;
//     }
// 
//     message IDepartment {
//         required double id = 1;
//         required string code = 2;
//         required double sales = 3;
//         required ArrayHierarchicalPointer.ITimestamp created_at = 4;
//         repeated ArrayHierarchicalPointer.IEmployee employees = 5;
//     }
// 
//     message IEmployee {
//         required double id = 1;
//         required string name = 2;
//         required double age = 3;
//         required double grade = 4;
//         required ArrayHierarchicalPointer.ITimestamp employeed_at = 5;
//     }
// }
const encode = input => {
        const $Sizer = typia_1.default.protobuf
            .createEncode.Sizer;
        const $Writer = typia_1.default.protobuf
            .createEncode.Writer;
        const encoder = writer => {
            const $peo0 = input => {
                // property "value";
                if (0 !== input.value.length) {
                    for (const elem of input.value) {
                        writer.uint32(10);
                        writer.fork();
                        $peo1(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo1 = input => {
                // property "id";
                writer.uint32(9);
                writer.double(input.id);
                // property "serial";
                writer.uint32(17);
                writer.double(input.serial);
                // property "name";
                writer.uint32(26);
                writer.string(input.name);
                // property "established_at";
                writer.uint32(34);
                writer.fork();
                $peo2(input.established_at);
                writer.ldelim();
                // property "departments";
                if (0 !== input.departments.length) {
                    for (const elem of input.departments) {
                        writer.uint32(42);
                        writer.fork();
                        $peo3(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo2 = input => {
                // property "time";
                writer.uint32(9);
                writer.double(input.time);
                // property "zone";
                writer.uint32(17);
                writer.double(input.zone);
            };
            const $peo3 = input => {
                // property "id";
                writer.uint32(9);
                writer.double(input.id);
                // property "code";
                writer.uint32(18);
                writer.string(input.code);
                // property "sales";
                writer.uint32(25);
                writer.double(input.sales);
                // property "created_at";
                writer.uint32(34);
                writer.fork();
                $peo2(input.created_at);
                writer.ldelim();
                // property "employees";
                if (0 !== input.employees.length) {
                    for (const elem of input.employees) {
                        writer.uint32(42);
                        writer.fork();
                        $peo4(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo4 = input => {
                // property "id";
                writer.uint32(9);
                writer.double(input.id);
                // property "name";
                writer.uint32(18);
                writer.string(input.name);
                // property "age";
                writer.uint32(25);
                writer.double(input.age);
                // property "grade";
                writer.uint32(33);
                writer.double(input.grade);
                // property "employeed_at";
                writer.uint32(42);
                writer.fork();
                $peo2(input.employeed_at);
                writer.ldelim();
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    }

//-------------------------------------------------
// GOOGLE
//-------------------------------------------------
function ArrayHierarchicalPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IDepartment$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.code)
  w.uint32(25).double(m.sales)
  types[3].encode(m.created_at,w.uint32(34).fork()).ldelim()
  if(m.employees!=null&&m.employees.length){
  for(var i=0;i<m.employees.length;++i)
  types[4].encode(m.employees[i],w.uint32(42).fork()).ldelim()
  }
  return w
}
function IEmployee$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.name)
  w.uint32(25).double(m.age)
  w.uint32(33).double(m.grade)
  types[4].encode(m.employeed_at,w.uint32(42).fork()).ldelim()
  return w
}
function ITimestamp$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.time)
  w.uint32(17).double(m.zone)
  return w
}