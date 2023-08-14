//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectNullable {
//     repeated ObjectNullable.IProduct value = 1;
//     message IProduct {
//         required string name = 1;
//         required ObjectNullable.IManufacturer manufacturer = 2;
//         optional ObjectNullable.IBrand brand = 3;
//         oneof similar {
//             ObjectNullable.IBrand v4 = 4;
//             ObjectNullable.IManufacturer v5 = 5;
//         }
//     }
// 
//     message IManufacturer {
//         required string type = 1;
//         required string name = 2;
//     }
// 
//     message IBrand {
//         required string type = 1;
//         required string name = 2;
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectNullable$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IProduct$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.name)
  types[1].encode(m.manufacturer,w.uint32(18).fork()).ldelim()
  if(m.brand!=null&&Object.hasOwnProperty.call(m,"brand"))
  types[2].encode(m.brand,w.uint32(26).fork()).ldelim()
  if(m.v4!=null&&Object.hasOwnProperty.call(m,"v4"))
  types[3].encode(m.v4,w.uint32(34).fork()).ldelim()
  if(m.v5!=null&&Object.hasOwnProperty.call(m,"v5"))
  types[4].encode(m.v5,w.uint32(42).fork()).ldelim()
  return w
}
function IManufacturer$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.type)
  w.uint32(18).string(m.name)
  return w
}
function IBrand$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(10).string(m.type)
  w.uint32(18).string(m.name)
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectNullable$decode(r,l){
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
function IProduct$decode(r,l){
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
  m.manufacturer=types[1].decode(r,r.uint32())
  break
  }
  case 3: {
  m.brand=types[2].decode(r,r.uint32())
  break
  }
  case 4: {
  m.v4=types[3].decode(r,r.uint32())
  break
  }
  case 5: {
  m.v5=types[4].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  if(!m.hasOwnProperty("manufacturer"))
  throw util.ProtocolError("missing required 'manufacturer'",{instance:m})
  return m
}
function IManufacturer$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.type=r.string()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  return m
}
function IBrand$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.type=r.string()
  break
  }
  case 2: {
  m.name=r.string()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("type"))
  throw util.ProtocolError("missing required 'type'",{instance:m})
  if(!m.hasOwnProperty("name"))
  throw util.ProtocolError("missing required 'name'",{instance:m})
  return m
}