//---------------------------------------------------------
// MESSAGE
//---------------------------------------------------------
// syntax = "proto3";
// 
// message ObjectUnionExplicitPointer {
//     repeated IPointer_lt_ObjectUnionExplicitPointer.Shape_gt_ value = 1;
//     message Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message IPoint_gt_ {
//             required double x = 1;
//             required double y = 2;
//             required string type = 3;
//         }
//     }
// 
//     message Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message ILine_gt_ {
//             required ObjectUnionExplicitPointer.IPoint p1 = 1;
//             required ObjectUnionExplicitPointer.IPoint p2 = 2;
//             required string type = 3;
//         }
//     }
// 
//     message IPoint {
//         required double x = 1;
//         required double y = 2;
//     }
// 
//     message Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message ITriangle_gt_ {
//             required ObjectUnionExplicitPointer.IPoint p1 = 1;
//             required ObjectUnionExplicitPointer.IPoint p2 = 2;
//             required ObjectUnionExplicitPointer.IPoint p3 = 3;
//             required string type = 4;
//         }
//     }
// 
//     message Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message IRectangle_gt_ {
//             required ObjectUnionExplicitPointer.IPoint p1 = 1;
//             required ObjectUnionExplicitPointer.IPoint p2 = 2;
//             required ObjectUnionExplicitPointer.IPoint p3 = 3;
//             required ObjectUnionExplicitPointer.IPoint p4 = 4;
//             required string type = 5;
//         }
//     }
// 
//     message Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message IPolyline_gt_ {
//             repeated ObjectUnionExplicitPointer.IPoint points = 1;
//             required string type = 2;
//         }
//     }
// 
//     message Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message IPolygon_gt_ {
//             required ObjectUnionExplicitPointer.IPolyline outer = 1;
//             repeated ObjectUnionExplicitPointer.IPolyline inner = 2;
//             required string type = 3;
//         }
//     }
// 
//     message IPolyline {
//         repeated ObjectUnionExplicitPointer.IPoint points = 1;
//     }
// 
//     message Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer {
//         message ICircle_gt_ {
//             required ObjectUnionExplicitPointer.IPoint centroid = 1;
//             required double radius = 2;
//             required string type = 3;
//         }
//     }
// }
// 
// message IPointer_lt_ObjectUnionExplicitPointer {
//     message Shape_gt_ {
//         oneof value {
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer.IPoint_gt_ v1 = 1;
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer.ILine_gt_ v2 = 2;
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer.ITriangle_gt_ v3 = 3;
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer.IRectangle_gt_ v4 = 4;
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer.IPolyline_gt_ v5 = 5;
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer.IPolygon_gt_ v6 = 6;
//             ObjectUnionExplicitPointer.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer.ICircle_gt_ v7 = 7;
//         }
//     }
// }

//---------------------------------------------------------
// ENCODER
//---------------------------------------------------------
function ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.value!=null&&m.value.length){
  for(var i=0;i<m.value.length;++i)
  types[0].encode(m.value[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function IPoint$encode(m,w){
  if(!w)
  w=Writer.create()
  w.uint32(9).double(m.x)
  w.uint32(17).double(m.y)
  return w
}
function Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}
function IPolyline$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.points!=null&&m.points.length){
  for(var i=0;i<m.points.length;++i)
  types[0].encode(m.points[i],w.uint32(10).fork()).ldelim()
  }
  return w
}
function Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer$encode(m,w){
  if(!w)
  w=Writer.create()
  return w
}

//---------------------------------------------------------
// DECODER
//---------------------------------------------------------
function ObjectUnionExplicitPointer$decode(r,l){
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
function Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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
function Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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
function IPoint$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  m.x=r.double()
  break
  }
  case 2: {
  m.y=r.double()
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  if(!m.hasOwnProperty("x"))
  throw util.ProtocolError("missing required 'x'",{instance:m})
  if(!m.hasOwnProperty("y"))
  throw util.ProtocolError("missing required 'y'",{instance:m})
  return m
}
function Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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
function Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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
function Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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
function Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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
function IPolyline$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1: {
  if(!(m.points&&m.points.length))
  m.points=[]
  m.points.push(types[0].decode(r,r.uint32()))
  break
  }
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
function Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicitPointer$decode(r,l){
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