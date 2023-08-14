//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ClassGetter {
//     message Person {
//         required string id = 1;
//         required string name = 2;
//         optional bool dead = 3;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ClassGetter$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Person$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.name)
  if(m.dead!=null&&Object.hasOwnProperty.call(m,"dead"))
  w.uint32(24).bool(m.dead)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ClassGetter$decode(r,l){
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
function Person$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.id=r.string()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.dead=r.bool()
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
  return m
}