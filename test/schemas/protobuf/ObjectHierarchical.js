//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectHierarchical {
//     message ICustomer {
//         required double id = 1;
//         required ObjectHierarchical.IChannel channel = 2;
//         optional ObjectHierarchical.IMember member = 3;
//         optional ObjectHierarchical.IAccount account = 4;
//         required string href = 5;
//         required string referrer = 6;
//         required string ip = 7;
//         required ObjectHierarchical.ITimestamp created_at = 8;
//     }
// 
//     message IChannel {
//         required double id = 1;
//         required string code = 2;
//         required string name = 3;
//         required double sequence = 4;
//         required bool exclusive = 5;
//         required double priority = 6;
//         required ObjectHierarchical.ITimestamp created_at = 7;
//     }
// 
//     message ITimestamp {
//         required double time = 1;
//         required double zone = 2;
//     }
// 
//     message IMember {
//         required double id = 1;
//         required ObjectHierarchical.IAccount account = 2;
//         optional ObjectHierarchical.IEnterprise enterprise = 3;
//         repeated string emails = 4;
//         required ObjectHierarchical.ITimestamp created_at = 5;
//         required bool authorized = 6;
//     }
// 
//     message IAccount {
//         required double id = 1;
//         required string code = 2;
//         required ObjectHierarchical.ITimestamp created_at = 3;
//     }
// 
//     message IEnterprise {
//         required double id = 1;
//         required ObjectHierarchical.IAccount account = 2;
//         required string name = 3;
//         required double grade = 4;
//         required ObjectHierarchical.ITimestamp created_at = 5;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectHierarchical$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function ICustomer$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  types[1].encode(m.channel,w.uint32(18).fork()).ldelim()
  if(m.member!=null&&Object.hasOwnProperty.call(m,"member"))
  types[2].encode(m.member,w.uint32(26).fork()).ldelim()
  if(m.account!=null&&Object.hasOwnProperty.call(m,"account"))
  types[3].encode(m.account,w.uint32(34).fork()).ldelim()
  w.uint32(42).string(m.href)
  w.uint32(50).string(m.referrer)
  w.uint32(58).string(m.ip)
  types[7].encode(m.createdAt,w.uint32(66).fork()).ldelim()
  return w
}
function IChannel$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.code)
  w.uint32(26).string(m.name)
  w.uint32(33).double(m.sequence)
  w.uint32(40).bool(m.exclusive)
  w.uint32(49).double(m.priority)
  types[6].encode(m.createdAt,w.uint32(58).fork()).ldelim()
  return w
}
function ITimestamp$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.time)
  w.uint32(17).double(m.zone)
  return w
}
function IMember$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  types[1].encode(m.account,w.uint32(18).fork()).ldelim()
  if(m.enterprise!=null&&Object.hasOwnProperty.call(m,"enterprise"))
  types[2].encode(m.enterprise,w.uint32(26).fork()).ldelim()
  if(m.emails!=null&&m.emails.length){
  for(var i=0;i<m.emails.length;++i)
  w.uint32(34).string(m.emails[i])
  }
  types[4].encode(m.createdAt,w.uint32(42).fork()).ldelim()
  w.uint32(48).bool(m.authorized)
  return w
}
function IAccount$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  w.uint32(18).string(m.code)
  types[2].encode(m.createdAt,w.uint32(26).fork()).ldelim()
  return w
}
function IEnterprise$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.id)
  types[1].encode(m.account,w.uint32(18).fork()).ldelim()
  w.uint32(26).string(m.name)
  w.uint32(33).double(m.grade)
  types[4].encode(m.createdAt,w.uint32(42).fork()).ldelim()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectHierarchical$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function ICustomer$decode(r,l){
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
  m.channel=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.member=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  m.account=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  m.href=r.string()
  break
  }
  case 6: {
  m.referrer=r.string()
  break
  }
  case 7: {
  m.ip=r.string()
  break
  }
  case 8: {
  m.createdAt=types[7].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("channel"))
  throw util.ProtocolError("missing required 'channel'",{instance:m})
  if(!m.hasOwnProperty("href"))
  throw util.ProtocolError("missing required 'href'",{instance:m})
  if(!m.hasOwnProperty("referrer"))
  throw util.ProtocolError("missing required 'referrer'",{instance:m})
  if(!m.hasOwnProperty("ip"))
  throw util.ProtocolError("missing required 'ip'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function IChannel$decode(r,l){
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
  m.name=r.string()
  break
  }
  case 4: {
  m.sequence=r.double()
  break
  }
  case 5: {
  m.exclusive=r.bool()
  break
  }
  case 6: {
  m.priority=r.double()
  break
  }
  case 7: {
  m.createdAt=types[6].decode(r,r.uint32())
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
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("sequence"))
  throw util.ProtocolError("missing required 'sequence'",{instance:m})
  if(!m.hasOwnProperty("exclusive"))
  throw util.ProtocolError("missing required 'exclusive'",{instance:m})
  if(!m.hasOwnProperty("priority"))
  throw util.ProtocolError("missing required 'priority'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
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
function IMember$decode(r,l){
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
  m.account=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.enterprise=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  if(!(m.emails&&m.emails.length))
  m.emails=[]
  m.emails.push(r.string())
  break
  }
  case 5: {
  m.createdAt=types[4].decode(r,r.uint32())
  break
  }
  case 6: {
  m.authorized=r.bool()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("account"))
  throw util.ProtocolError("missing required 'account'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  if(!m.hasOwnProperty("authorized"))
  throw util.ProtocolError("missing required 'authorized'",{instance:m})
  return m
}
function IAccount$decode(r,l){
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
  m.createdAt=types[2].decode(r,r.uint32())
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
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}
function IEnterprise$decode(r,l){
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
  m.account=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.name=r.string()
  break
  }
  case 4: {
  m.grade=r.double()
  break
  }
  case 5: {
  m.createdAt=types[4].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("account"))
  throw util.ProtocolError("missing required 'account'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("grade"))
  throw util.ProtocolError("missing required 'grade'",{instance:m})
  if(!m.hasOwnProperty("createdAt"))
  throw util.ProtocolError("missing required 'createdAt'",{instance:m})
  return m
}