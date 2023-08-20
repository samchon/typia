//--------------------------------------------------
// DEODERS
//--------------------------------------------------
function ArrayHierarchicalPointer$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.value&&m.value.length))
  m.value=[]
  m.value.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function ICompany$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.serial=r.double()
  break
  }
  case 3: {
  m.name=r.string()
  break
  }
  case 4: {
  m.establishedAt=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  if(!(m.departments&&m.departments.length))
  m.departments=[]
  m.departments.push(types[4].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("serial"))
  throw util.ProtocolError("missing required 'serial'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("establishedAt"))
  throw util.ProtocolError("missing required 'establishedAt'",{instance:m})
  return m
}
function ITimestamp$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.time=r.double()
  break
  }
  case 2: {
  m.zone=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("time"))
  throw util.ProtocolError("missing required 'time'",{instance:m})
  if(!m.hasOwnProperty("zone"))
  throw util.ProtocolError("missing required 'zone'",{instance:m})
  return m
}
function IDepartment$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.code=r.string()
  break
  }
  case 3: {
  m.sales=r.double()
  break
  }
  case 4: {
  m.createdAt=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  if(!(m.employees&&m.employees.length))
  m.employees=[]
  m.employees.push(types[4].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("code"))
  throw util.ProtocolError("missing required 'code'",{instance:m})
  if(!m.hasOwnProperty("sales"))
  throw util.ProtocolError("missing required 'sales'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function IEmployee$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.double()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.age=r.double()
  break
  }
  case 4: {
  m.grade=r.double()
  break
  }
  case 5: {
  m.employeedAt=types[4].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("age"))
  throw util.ProtocolError("missing required 'age'",{instance:m})
  if(!m.hasOwnProperty("grade"))
  throw util.ProtocolError("missing required 'grade'",{instance:m})
  if(!m.hasOwnProperty("employeedAt"))
  throw util.ProtocolError("missing required 'employeedAt'",{instance:m})
  return m
}

//--------------------------------------------------
// ENCODERS
//--------------------------------------------------
function ArrayHierarchicalPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function ICompany$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(17).double(m.serial)
  w.uint32(26).string(m.name)
  types[3].encode(m.establishedAt,w.uint32(34).fork()).ldelim()
  if(m.departments!=null&&m.departments.length){
  for(var i=0;i<m.departments.length;++i)
  types[4].encode(m.departments[i],w.uint32(42).fork()).ldelim()
  }
  return w
}
function ITimestamp$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.time)
  w.uint32(17).double(m.zone)
  return w
}
function IDepartment$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.code)
  w.uint32(25).double(m.sales)
  types[3].encode(m.createdAt,w.uint32(34).fork()).ldelim()
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
  types[4].encode(m.employeedAt,w.uint32(42).fork()).ldelim()
  return w
}