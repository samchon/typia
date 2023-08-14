//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message TagCustom {
//     required string id = 1;
//     required string dollar = 2;
//     required string postfix = 3;
//     required double log = 4;
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function TagCustom$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.id)
  w.uint32(18).string(m.dollar)
  w.uint32(26).string(m.postfix)
  w.uint32(33).double(m.log)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function TagCustom$decode(r,l){
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
  m.dollar=r.string()
  break
  }
  case 3: {
  m.postfix=r.string()
  break
  }
  case 4: {
  m.log=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("id"))
  throw util.ProtocolError("missing required 'id'",{instance:m})
  if(!m.hasOwnProperty("dollar"))
  throw util.ProtocolError("missing required 'dollar'",{instance:m})
  if(!m.hasOwnProperty("postfix"))
  throw util.ProtocolError("missing required 'postfix'",{instance:m})
  if(!m.hasOwnProperty("log"))
  throw util.ProtocolError("missing required 'log'",{instance:m})
  return m
}