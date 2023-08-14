//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ClassMethod {
//     message Animal {
//         required string name = 1;
//         required double age = 2;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ClassMethod$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Animal$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.name)
  w.uint32(17).double(m.age)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ClassMethod$decode(r,l){
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
function Animal$decode(r,l){
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
  m.age=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("age"))
  throw util.ProtocolError("missing required 'age'",{instance:m})
  return m
}