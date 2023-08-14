//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectIntersection {
//     required string email = 1;
//     required string name = 2;
//     required bool vulnerable = 3;
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectIntersection$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.email)
  w.uint32(18).string(m.name)
  w.uint32(24).bool(m.vulnerable)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectIntersection$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.email=r.string()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  case 3: {
  m.vulnerable=r.bool()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("email"))
  throw util.ProtocolError("missing required 'email'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("vulnerable"))
  throw util.ProtocolError("missing required 'vulnerable'",{instance:m})
  return m
}