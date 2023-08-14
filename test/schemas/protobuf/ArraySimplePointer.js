//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ArraySimplePointer {
//     repeated ArraySimplePointer.IPerson value = 1;
//     message IPerson {
//         required string name = 1;
//         required string email = 2;
//         repeated ArraySimplePointer.IHobby hobbies = 3;
//     }
// 
//     message IHobby {
//         required string name = 1;
//         required string body = 2;
//         required double rank = 3;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ArraySimplePointer$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IPerson$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.name)
  w.uint32(18).string(m.email)
  if(m.hobbies!=null&&m.hobbies.length){
  for(var i=0;i<m.hobbies.length;++i)
  types[2].encode(m.hobbies[i],w.uint32(26).fork()).ldelim()
  }
  return w
}
function IHobby$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.name)
  w.uint32(18).string(m.body)
  w.uint32(25).double(m.rank)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ArraySimplePointer$decode(r,l){
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
function IPerson$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.name=r.string()
  break
  }
  case 2: {
  m.email=r.string()
  break
  }
  case 3: {
  if(!(m.hobbies&&m.hobbies.length))
  m.hobbies=[]
  m.hobbies.push(types[2].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("email"))
  throw util.ProtocolError("missing required 'email'",{instance:m})
  return m
}
function IHobby$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.name=r.string()
  break
  }
  case 2: {
  m.body=r.string()
  break
  }
  case 3: {
  m.rank=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("body"))
  throw util.ProtocolError("missing required 'body'",{instance:m})
  if(!m.hasOwnProperty("rank"))
  throw util.ProtocolError("missing required 'rank'",{instance:m})
  return m
}