define(["./Matrix3-b2351961","./defaultValue-f6d5e6da","./EllipseOutlineGeometry-3d88fb74","./Math-355606c6","./Transforms-f17097e5","./Matrix2-7a8e9daf","./RuntimeError-9b4ce3fb","./combine-0c102d93","./ComponentDatatype-ab629b88","./WebGLConstants-7f557f93","./EllipseGeometryLibrary-d93d7f63","./GeometryAttribute-9c1a6bab","./GeometryAttributes-1e4ddcd2","./GeometryOffsetAttribute-2579b8d2","./IndexDatatype-a9b1bc18"],(function(e,t,r,i,n,l,o,a,s,u,m,c,p,y,G){"use strict";return function(i,n){return t.defined(n)&&(i=r.EllipseOutlineGeometry.unpack(i,n)),i._center=e.Cartesian3.clone(i._center),i._ellipsoid=e.Ellipsoid.clone(i._ellipsoid),r.EllipseOutlineGeometry.createGeometry(i)}}));
