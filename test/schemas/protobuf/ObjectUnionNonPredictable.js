//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectUnionNonPredictable {
//     repeated ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;
//     message IWrapper_lt_ObjectUnionNonPredictable {
//         message IUnion_gt_ {
//             required IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;
//         }
//     }
// 
//     message IWrapper_lt_boolean_gt_ {
//         required IPointer_lt_boolean_gt_ value = 1;
//     }
// 
//     message IWrapper_lt_number_gt_ {
//         required IPointer_lt_number_gt_ value = 1;
//     }
// 
//     message IWrapper_lt_string_gt_ {
//         required IPointer_lt_string_gt_ value = 1;
//     }
// }
// 
// message IPointer_lt_ObjectUnionNonPredictable {
//     message IUnion_gt_ {
//         oneof value {
//             ObjectUnionNonPredictable.IWrapper_lt_string_gt_ v1 = 1;
//             ObjectUnionNonPredictable.IWrapper_lt_number_gt_ v2 = 2;
//             ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_ v3 = 3;
//         }
//     }
// }
// 
// message IPointer_lt_boolean_gt_ {
//     required bool value = 1;
// }
// 
// message IPointer_lt_number_gt_ {
//     required double value = 1;
// }
// 
// message IPointer_lt_string_gt_ {
//     required string value = 1;
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectUnionNonPredictable$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function IWrapper_lt_ObjectUnionNonPredictable$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function IWrapper_lt_boolean_gt_$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.value,w.uint32(10).fork()).ldelim()
  return w
}
function IWrapper_lt_number_gt_$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.value,w.uint32(10).fork()).ldelim()
  return w
}
function IWrapper_lt_string_gt_$encode(m,w){
  if(!w)
  w=Writer.create()
  types[0].encode(m.value,w.uint32(10).fork()).ldelim()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectUnionNonPredictable$decode(r,l){
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
function IWrapper_lt_ObjectUnionNonPredictable$decode(r,l){
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
function IWrapper_lt_boolean_gt_$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=types[0].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("value"))
  throw util.ProtocolError("missing required 'value'",{instance:m})
  return m
}
function IWrapper_lt_number_gt_$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=types[0].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("value"))
  throw util.ProtocolError("missing required 'value'",{instance:m})
  return m
}
function IWrapper_lt_string_gt_$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.value=types[0].decode(r,r.uint32())
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("value"))
  throw util.ProtocolError("missing required 'value'",{instance:m})
  return m
}